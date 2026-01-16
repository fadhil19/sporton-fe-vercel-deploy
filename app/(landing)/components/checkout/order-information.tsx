import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
  const inputClassName = "w-full bg-gray-100 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all";
  const labelClassName = "text-sm font-semibold text-gray-800 ml-1"; // ml-1 biar lurus sama teks dalam input

  return (
    <CardWithHeader title={<span className="font-bold text-lg">Order Information</span>}>
      
      {/* Container Form */}
      {/* p-2: Memberi nafas sedikit dari pinggir card */}
      {/* space-y-6: Memberi jarak yang LEGA antar setiap kolom input */}
      <form className="space-y-6 p-4"> 
        
        {/* Full Name */}
        {/* gap-1.5: Jarak label ke input DEKAT, biar terlihat satu kesatuan */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClassName}>Full Name</label>
          <input
            type="text"
            placeholder="Type your full name"
            className={inputClassName}
          />
        </div>

        {/* Whatsapp Number */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClassName}>Whatsapp Number</label>
          <input
            type="text"
            placeholder="Type your whatsapp number"
            className={inputClassName}
          />
        </div>

        {/* Shipping Address */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClassName}>Shipping Address</label>
          <textarea
            rows={4} // Rows dikurangi sedikit biar proporsional
            placeholder="Type your shipping address"
            className={`${inputClassName} resize-none`}
          />
        </div>
      </form>
    </CardWithHeader>
  );
};

export default OrderInformation;