import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // for dropdown icons
import ShippingEstimate from "../components/ShippingEstimate."; // <- remove or fix if file doesn't exist

export default function PricingDropdown({ form, handleChange, handleSubmit, result }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 p-4 bg-gradient-to-r from-[#016AB3] via-[#0096CD] to-[#00AEDC] rounded-2xl">
      
      {/* Dropdown Header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-white text-lg font-semibold"
      >
        Estimate Price and Shipping
        {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {/* Dropdown Content */}
      {open && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <p className="text-xs text-white opacity-90 mb-1">Quantity</p>
              <input
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                type="number"
                placeholder="Enter Quantity"
                min="1"
                className="w-full h-12 px-3 bg-white text-black rounded-md"
              />
            </div>
            <div className="w-full sm:w-1/2 flex items-end">
              <button
                onClick={handleSubmit}
                className="w-full h-12 bg-[#F8C20A] hover:bg-yellow-500 text-black font-semibold rounded-md transition-colors"
              >
                Calculate Price
              </button>
            </div>
          </div>

          {/* Results */}
          {result && (
            <div className="bg-white/20 rounded-lg p-4 text-white">
              <h4 className="font-semibold mb-2">Pricing Results:</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Unit Price:</span><span>${result.unitPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total ({form.quantity} books):</span><span>${result.totalPrice}</span>
                </div>
                {result.discount > 0 && (
                  <>
                    <div className="flex justify-between text-green-200">
                      <span>Discount ({result.discountPercent}%):</span>
                      <span>-${result.discount}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-yellow-200">
                      <span>Final Price:</span><span>${result.finalPrice}</span>
                    </div>
                  </>
                )}
                <ShippingEstimate />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
