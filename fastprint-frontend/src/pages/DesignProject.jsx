import Header from "../components/Header";
import Footer from "../components/Footer";
import PersonalIcon from "../assets/images/newsletter.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import * as pdfjsLib from "pdfjs-dist";
import QuantityEstimateDropdown from "../components/QuantityEstimateDropdown";
import { BASE_URL } from "../services/baseURL";

// PDF.js worker setup
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

// Image imports - consolidated
import PerfectBoundImg from "../assets/images/perfectbound.png";
import CoilBoundImg from "../assets/images/coilbound.png";
import SaddleImg from "../assets/images/saddle.png";
import CaseWrap from "../assets/images/casewrap.png";
import LinenWrap from "../assets/images/linenwrap.png";
import WireOBoundImg from "../assets/images/wireo.jpg";
import StandardBlackandWhite from "../assets/images/int1.png";
import PremiumBlackandWhite from "../assets/images/in2.png";
import StandardColor from "../assets/images/in3.png";
import PremiumColor from "../assets/images/int4.png";
import Creamuncoated from "../assets/images/pp1.jpg";
import Whiteuncoated from "../assets/images/pp2.jpg";
import Whitecoated from "../assets/images/pp3.jpg";
import Whitecoatedd from "../assets/images/pp4.jpg";
import Glossy from "../assets/images/glossy.png";
import Matty from "../assets/images/matty.png";

const API_BASE = `${BASE_URL}`;

// Configuration objects
const IMAGE_MAPS = {
  binding: { "Perfect Bound": PerfectBoundImg, "Coil Bound": CoilBoundImg, "Saddle Stitch": SaddleImg, "Case Wrap": CaseWrap, "Linen Wrap": LinenWrap, "Wire O": WireOBoundImg },
  interiorColor: { "Standard Black & White": StandardBlackandWhite, "Premium Black & White": PremiumBlackandWhite, "Standard Color": StandardColor, "Premium Color": PremiumColor },
  paperType: { "60# Cream-Uncoated": Creamuncoated, "60# White-Uncoated": Whiteuncoated, "80# White-Coated": Whitecoated, "100# White-Coated": Whitecoatedd },
  coverFinish: { Gloss: Glossy, Matte: Matty }
};

const API_ENDPOINTS = {
  "Photo Book": { dropdown: "/api/photobook/dropdowns/", binding: "/api/photobook/bindings/", calculate: "/api/photobook/calculate/" },
  "Print Book": { dropdown: "/api/calculator/dropdowns/", binding: "/api/calculator/bindings/", calculate: "/api/calculator/calculate/" },
  "Magazine": { dropdown: "/api/magazine/dropdowns/", binding: "/api/magazine/bindings/", calculate: "/api/magazine/calculate/" },
  "Year Book": { dropdown: "/api/yearbook/dropdowns/", binding: "/api/yearbook/bindings/", calculate: "/api/yearbook/calculate/" },
  "Calender": { dropdown: "/api/calender/dropdowns/", binding: "/api/calender/bindings/", calculate: "/api/calender/calculate/" },
  "Comic Book": { dropdown: "/api/comicbook/dropdowns/", binding: "/api/comicbook/bindings/", calculate: "/api/comicbook/calculate/" }
};

const getDiscountInfo = (qty) => {
  if (qty >= 1000) return { percent: 15, price: 17.93 };
  if (qty >= 500) return { percent: 10, price: 18.98 };
  if (qty >= 100) return { percent: 5, price: 20.04 };
  return null;
};

// Reusable components
const OptionField = ({ title, name, options, imageMap, form, handleChange }) => (
  <fieldset className="mb-6">
    <legend className="font-semibold text-[#2A428C] mb-4 text-lg">{title}</legend>
    <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
      {Array.from(new Map(options.map(opt => [opt.name, opt])).values()).map(opt => (
        <label key={opt.id} className={`cursor-pointer flex flex-col items-center w-20 md:w-28 p-2 md:p-3 border rounded-lg transition ${form[name] === opt.id ? "border-blue-600 bg-blue-50" : "border-gray-300 bg-white"}`}>
          <input type="radio" name={name} value={opt.id} checked={form[name] === opt.id} onChange={handleChange} className="mb-1 md:mb-2" />
          {imageMap[opt.name] && <img src={imageMap[opt.name]} alt={opt.name} className="w-10 h-10 md:w-16 md:h-16 object-contain mb-1 md:mb-2" />}
          <span className="text-center text-xs md:text-sm text-gray-700">{opt.name}</span>
        </label>
      ))}
    </div>
  </fieldset>
);

const NavBar = ({ navigate }) => (
  <div className="w-full h-[51px] flex items-center justify-center gap-4 md:gap-8 px-4 md:px-6 bg-gradient-to-r from-[#016AB3] via-[#0096CD] to-[#00AEDC] font-sans overflow-x-auto">
    <span className="text-white text-base md:text-lg font-semibold cursor-pointer whitespace-nowrap" onClick={() => navigate("/start-project")}>Start Project</span>
    <span className="text-white text-base md:text-lg font-semibold cursor-pointer whitespace-nowrap" onClick={() => navigate("/design-project")}>Designs</span>
  </div>
);

const ProjectDetails = ({ projectData }) => (
  <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
    <h2 className="text-[#2A428C] text-xl md:text-2xl font-bold mb-4 md:mb-6">Project Details</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {[
        { label: "Project Title", value: projectData.projectTitle },
        { label: "Language", value: projectData.language || "Not specified" },
        { label: "Category", value: projectData.category },
        { label: "Genre", value: projectData.genre || "Not specified" }
      ].map(({ label, value }) => (
        <div key={label} className="flex flex-col">
          <span className="text-[#2A428C] font-semibold text-xs md:text-sm uppercase tracking-wide">{label}</span>
          <span className="text-gray-800 text-sm md:text-base mt-1">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

const FileUpload = ({ fileError, selectedFile, uploadStatus, uploadProgress, handleFileChange }) => (
  <div className="w-full">
    <h1 className="text-[#2A428C] text-lg md:text-[24px] font-bold">Interior File Upload</h1>
    <div className="w-full max-w-[675px] h-[160px] md:h-[206px] mx-auto border border-dashed border-[#2A428C] rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-4 bg-white mt-4 md:mt-6 relative p-4">
      <input type="file" accept="application/pdf" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
      <div className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] flex items-center justify-center rounded-full bg-[#2A428C]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="16" height="16" className="md:w-5 md:h-5">
          <path d="M5 20h14v-2H5v2zm7-18L5.33 9h3.67v4h4V9h3.67L12 2z" />
        </svg>
      </div>

      {uploadStatus === "uploading" && (
        <>
          <p className="text-[#2A428C] font-semibold text-sm md:text-[16px] text-center">Uploading... {uploadProgress}%</p>
          <div className="w-32 md:w-48 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${uploadProgress}%` }} />
          </div>
        </>
      )}

      {uploadStatus === "success" && selectedFile && (
        <p className="text-green-600 font-semibold text-sm md:text-[16px] text-center truncate w-full px-2">{selectedFile.name} uploaded successfully!</p>
      )}

      {(uploadStatus === "idle" || uploadStatus === "error") && (
        <p className="text-[#2A428C] font-semibold text-sm md:text-[16px] text-center px-2">
          {selectedFile ? selectedFile.name : "Upload your PDF file or Drag & Drop it here"}
        </p>
      )}

      {fileError && <p className="text-red-600 text-xs md:text-sm text-center mt-1 md:mt-2 px-2">{fileError}</p>}
    </div>
  </div>
);

const CoverDesign = ({ coverFileInputRef, handleCoverFileChange, coverFile }) => (
  <div className="w-full mt-6 md:mt-10">
    <h2 className="text-[#2A428C] font-bold text-xl md:text-[36px] mb-2">Book Cover Design</h2>
    <hr className="border-t border-black w-full mb-4" />
    <div className="w-full border rounded-lg md:rounded-[20px] px-4 md:px-6 py-4 md:py-6 flex items-center gap-3 md:gap-4 shadow-sm mb-4 md:mb-6 bg-white border-[#ECECEC] cursor-pointer" onClick={() => coverFileInputRef.current?.click()}>
      <img src={PersonalIcon} alt="Personal" className="h-8 w-8 md:h-[48px] md:w-[48px]" />
      <div>
        <h3 className="text-black font-semibold text-sm md:text-base">Upload Your Cover</h3>
        <p className="text-black text-xs md:text-sm">Upload a cover for your book</p>
      </div>
    </div>
    <input type="file" accept="image/jpeg,image/png,application/pdf" ref={coverFileInputRef} onChange={handleCoverFileChange} style={{ display: "none" }} />
    {coverFile && <p className="text-green-600 text-center mb-4 text-sm md:text-base">Selected cover: {coverFile.name}</p>}
  </div>
);

const DesignProject = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const coverFileInputRef = useRef(null);

  // State consolidation
  const [state, setState] = useState({
    fileError: "",
    selectedFile: null,
    uploadStatus: "idle",
    uploadProgress: 0,
    usedExpertCover: false,
    coverFile: null,
    projectData: null,
    dropdowns: {},
    bindings: [],
    initialBindings: [],
    initialBindingsLoaded: false,
    loading: true,
    result: null,
    calculating: false,
    form: {
      trim_size_id: "",
      page_count: "",
      binding_id: "",
      interior_color_id: "",
      paper_type_id: "",
      cover_finish_id: "",
      quantity: 1
    }
  });

  const updateState = (updates) => setState(prev => ({ ...prev, ...updates }));
  const updateForm = (updates) => setState(prev => ({ ...prev, form: { ...prev.form, ...updates } }));

  useEffect(() => {
    if (location.state) updateState({ projectData: location.state });
  }, [location.state]);

  // API functions
  const fetchData = async (url) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const res = await axios.get(`${API_BASE}${url}`, config);
      return res.data || [];
    } catch (err) {
      console.error(`Failed to load data from ${url}:`, err);
      if (err.response?.status === 401) {
        // Handle unauthorized error (e.g., redirect to login)
        navigate('/login');
      }
      return [];
    }
  };

  const fetchInitialBindings = async () => {
    const endpoints = API_ENDPOINTS[state.projectData?.category];
    if (!endpoints) return;

    const bindingsData = await fetchData(endpoints.binding);
    updateState({ 
      initialBindings: bindingsData, 
      bindings: bindingsData, 
      initialBindingsLoaded: true 
    });
    localStorage.setItem("bindings", JSON.stringify(bindingsData));
  };

  const fetchDropdownsAndBindings = async () => {
    const endpoints = API_ENDPOINTS[state.projectData?.category];
    if (!endpoints) {
      updateState({ dropdowns: {}, loading: false });
      return;
    }

    const dropdownData = await fetchData(endpoints.dropdown);
    updateState({ dropdowns: dropdownData });

    ["cover_finishes", "interior_colors", "paper_types", "trim_sizes"].forEach(key => {
      localStorage.setItem(key, JSON.stringify(dropdownData[key] || []));
    });

    await fetchInitialBindings();
    updateState({ loading: false });
  };

  const fetchFilteredBindings = async (trim_size_id, page_count) => {
    const endpoints = API_ENDPOINTS[state.projectData?.category];
    if (!endpoints) return;

    const params = state.projectData.category === "Calender" ? {} : { trim_size_id, page_count };
    const bindingsData = await fetchData(`${endpoints.binding}?${new URLSearchParams(params)}`);
    updateState({ bindings: bindingsData });
  };

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    
    if (!state.projectData?.category) return;
    updateState({ 
      loading: true, 
      bindings: [], 
      initialBindings: [], 
      initialBindingsLoaded: false, 
      result: null 
    });
    fetchDropdownsAndBindings();
  }, [state.projectData?.category, token, navigate]);

  useEffect(() => {
    if (!state.initialBindingsLoaded) return;

    if (state.projectData?.category === "Calender") {
      updateState({ bindings: state.initialBindings });
      return;
    }

    const { trim_size_id, page_count } = state.form;
    if (trim_size_id && page_count) {
      fetchFilteredBindings(trim_size_id, page_count);
    } else {
      updateState({ bindings: state.initialBindings });
    }
  }, [state.form.trim_size_id, state.form.page_count, state.initialBindingsLoaded, state.projectData?.category]);

  // Event handlers
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? (value === "" ? "" : Number(value)) : value;

    if ((name === "trim_size_id" || name === "page_count") && state.projectData?.category !== "Calender") {
      updateForm({ [name]: val, binding_id: "" });
    } else {
      updateForm({ [name]: val });
    }

    if (name !== "quantity") {
      updateState({ result: null });
    }
  };

  const handlePriceCalculation = async (e) => {
    if (e) e.preventDefault();

    const endpoints = API_ENDPOINTS[state.projectData?.category];
    if (!endpoints?.calculate) {
      alert("Price calculation not available for this category");
      return;
    }

    const isCalendar = state.projectData?.category === "Calender";
    const requiredFields = isCalendar
      ? ["binding_id", "interior_color_id", "paper_type_id", "cover_finish_id", "quantity"]
      : ["trim_size_id", "page_count", "binding_id", "interior_color_id", "paper_type_id", "cover_finish_id", "quantity"];

    const missingFields = requiredFields.filter(field => !state.form[field]);
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(", ")}`);
      return;
    }

    updateState({ calculating: true });
    try {
      const calculationData = {
        trim_size_id: state.form.trim_size_id,
        page_count: isCalendar ? (state.form.page_count || 1) : state.form.page_count,
        binding_id: state.form.binding_id,
        interior_color_id: state.form.interior_color_id,
        paper_type_id: state.form.paper_type_id,
        cover_finish_id: state.form.cover_finish_id,
        quantity: state.form.quantity
      };

      if (isCalendar) delete calculationData.trim_size_id;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      
      const response = await axios.post(`${API_BASE}${endpoints.calculate}`, calculationData, config);
      updateState({ result: response.data });
    } catch (error) {
      console.error("Calculation error:", error);
      alert("Failed to calculate price. Please try again.");
    } finally {
      updateState({ calculating: false });
    }
  };

  const handleContactExpert = () => {
    localStorage.setItem('designForm', JSON.stringify(state.form));
    localStorage.setItem('projectData', JSON.stringify(state.projectData));
    updateState({ usedExpertCover: true });
    navigate('/cover-expert');
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    updateState({ 
      fileError: "", 
      selectedFile: null, 
      uploadStatus: "idle", 
      uploadProgress: 0 
    });

    if (!file) return;
    if (file.type !== "application/pdf") {
      updateState({ fileError: "Only PDF files are allowed.", uploadStatus: "error" });
      return;
    }

    updateState({ uploadStatus: "uploading" });
    const fileReader = new FileReader();
    fileReader.onload = async function () {
      try {
        const typedarray = new Uint8Array(this.result);
        const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
        const pageCount = pdf.numPages;

        if (pageCount < 2 || pageCount > 800) {
      updateState({ fileError: "Page count must be between 2 and 800.", uploadStatus: "error" });
      return;
    }

    updateForm({ page_count: pageCount });
    updateState({ selectedFile: file, uploadStatus: "success" });
  } catch {
    updateState({ fileError: "Invalid PDF file or corrupted.", uploadStatus: "error" });
  }
};
fileReader.readAsArrayBuffer(file);
  };

  const handleCoverFileChange = (e) => {
    const file = e.target.files[0];
    updateState({ coverFile: null });

    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!allowedTypes.includes(file.type)) {
      alert("Cover design must be a JPG, PNG, or PDF file.");
      return;
    }
    updateState({ coverFile: file });
  };

  const handleSubmit = async () => {
    if (!state.selectedFile) return alert("Please upload your book PDF file");

    const isCalendar = state.projectData?.category === "Calender";
    const requiredFields = isCalendar
      ? ["binding_id", "interior_color_id", "paper_type_id", "cover_finish_id"]
      : ["trim_size_id", "page_count", "binding_id", "interior_color_id", "paper_type_id", "cover_finish_id"];

    if (!requiredFields.every(field => state.form[field])) {
      return alert("Please complete all book configuration options");
    }

    if (!state.projectData?.category || !state.projectData?.language || !token) {
      return alert(token ? "Please select a valid category and language." : "You must be logged in to submit the project.");
    }

    try {
      const formData = new FormData();
      formData.append("title", state.projectData.projectTitle || "");
      formData.append("category", state.projectData.category);
      formData.append("language", state.projectData.language);
      formData.append("pdf_file", state.selectedFile);
      if (state.coverFile) formData.append("cover_file", state.coverFile);

      const getOptionName = (options, id) => options.find(opt => opt.id === Number(id))?.name || '';

      formData.append('binding_type', getOptionName(state.bindings, state.form.binding_id));
      formData.append('cover_finish', getOptionName(state.dropdowns.cover_finishes || [], state.form.cover_finish_id));
      formData.append('interior_color', getOptionName(state.dropdowns.interior_colors || [], state.form.interior_color_id));
      formData.append('paper_type', getOptionName(state.dropdowns.paper_types || [], state.form.paper_type_id));

      if (!isCalendar) formData.append('trim_size', getOptionName(state.dropdowns.trim_sizes || [], state.form.trim_size_id));

      formData.append('page_count', isCalendar ? (state.form.page_count || 1) : state.form.page_count);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => updateState({ uploadProgress: Math.round((progressEvent.loaded * 100) / progressEvent.total) })
      };

      const response = await axios.post(`${API_BASE}/api/book/upload-book/`, formData, config);

      if (response.data?.status === "success") {
        alert("Project submitted successfully!");
        const quantity = state.form.quantity || 0;
        const originalTotalCost = state.result?.original_total_cost ?? (state.result?.cost_per_book * quantity);
        const finalTotalCost = state.result?.total_cost ?? originalTotalCost;

        navigate("/shop", {
          state: {
            originalTotalCost,
            finalTotalCost,
            initialQuantity: quantity
          }
        });
      } else {
        alert("Submission failed: " + (response.data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(error.response?.data?.message || error.message || "An error occurred while submitting your project.");
    }
  };

  const renderCalculatorOptions = () => {
    if (state.loading) return <div className="text-center py-8 text-blue-700">Loading calculator options...</div>;

    const { interior_colors = [], paper_types = [], cover_finishes = [], trim_sizes = [] } = state.dropdowns;
    const isCalendar = state.projectData?.category === "Calender";

    return (
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
        {!isCalendar && (
          <div className="mb-6 md:mb-8 p-4 md:p-6 bg-gradient-to-r from-[#016AB3] via-[#0096CD] to-[#00AEDC] rounded-lg">
            <h3 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-4">Book Size & Page Count</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="block text-white text-xs md:text-sm font-medium mb-1 md:mb-2">Trim Size</label>
                <select name="trim_size_id" value={state.form.trim_size_id} onChange={handleChange} className="w-full p-2 md:p-3 border border-gray-300 rounded-lg bg-white text-sm md:text-base" required>
                  <option value="">Select Trim Size</option>
                  {trim_sizes.map(ts => <option key={ts.id} value={ts.id}>{ts.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-white text-xs md:text-sm font-medium mb-1 md:mb-2">Page Count</label>
                <input type="number" name="page_count" value={state.form.page_count} onChange={handleChange} min="1" max="800" className="w-full p-2 md:p-3 border border-gray-300 rounded-lg bg-white text-sm md:text-base" placeholder="Enter Page Count" required />
              </div>
            </div>
          </div>
        )}

        <OptionField title="Binding Type" name="binding_id" options={state.bindings} imageMap={IMAGE_MAPS.binding} form={state.form} handleChange={handleChange} />
        <OptionField title="Interior Color" name="interior_color_id" options={interior_colors} imageMap={IMAGE_MAPS.interiorColor} form={state.form} handleChange={handleChange} />
        <OptionField title="Paper Type" name="paper_type_id" options={paper_types} imageMap={IMAGE_MAPS.paperType} form={state.form} handleChange={handleChange} />
        <OptionField title="Cover Finish" name="cover_finish_id" options={cover_finishes} imageMap={IMAGE_MAPS.coverFinish} form={state.form} handleChange={handleChange} />

        <div className="mt-6 md:mt-8">
          <QuantityEstimateDropdown
            form={state.form}
            handleChange={handleChange}
            handleSubmit={handlePriceCalculation}
            result={state.result}
            getDiscountInfo={getDiscountInfo}
            calculating={state.calculating}
            loadingAvailableOptions={state.loading}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <NavBar navigate={navigate} />
      <div className="w-full min-h-screen px-4 md:px-6 py-6 md:py-10 bg-gradient-to-br from-[#eef4ff] to-[#fef6fb] font-sans">
        <div className="max-w-4xl mx-auto p-4 md:p-8 lg:p-12 rounded-xl md:rounded-2xl shadow-xl bg-gradient-to-r from-[#ffe4ec] via-[#fdfdfd] to-[#e0f3ff] flex flex-col gap-6 md:gap-8 lg:gap-10">
          <FileUpload 
            fileError={state.fileError}
            selectedFile={state.selectedFile}
            uploadStatus={state.uploadStatus}
            uploadProgress={state.uploadProgress}
            handleFileChange={handleFileChange}
          />

          {state.projectData && <ProjectDetails projectData={state.projectData} />}

          <div className="flex flex-col gap-3">
            <h2 className="text-[#2A428C] text-lg md:text-xl lg:text-[24px] font-bold">Book Configuration</h2>
            {renderCalculatorOptions()}
          </div>

          <CoverDesign 
            coverFileInputRef={coverFileInputRef}
            handleCoverFileChange={handleCoverFileChange}
            coverFile={state.coverFile}
          />

          <div className="flex flex-col items-center gap-4 md:gap-6 mt-6 md:mt-10">
            <button onClick={handleContactExpert} disabled={!!state.coverFile} className="w-full max-w-md md:max-w-lg lg:max-w-xl px-6 md:px-10 py-2 md:py-3 bg-gradient-to-r from-[#0a79f8] to-[#1e78ee] text-white font-medium text-sm md:text-base rounded-full shadow-md hover:shadow-lg">
              Contact Cover Design Expert
            </button>

            <button onClick={handleSubmit} disabled={state.uploadStatus === "uploading"} className="w-full max-w-md md:max-w-lg lg:max-w-xl px-6 md:px-10 py-2 md:py-3 bg-gradient-to-r from-[#F8C20A] to-[#EE831E] text-white font-medium text-sm md:text-base rounded-full shadow-md hover:shadow-lg">
              Print Your Book
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DesignProject;