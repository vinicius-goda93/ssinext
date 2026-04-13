export default function EstimateForm({ fieldBg }: { fieldBg: string }) {
  const inputCls = `w-full ${fieldBg} border border-white/15 text-white px-4 py-3 text-sm focus:outline-none focus:border-ssi-orange transition`;
  return (
    <form className="space-y-5">
      <div className="grid grid-cols-2 gap-5">
        <Field label="First Name" required inputCls={inputCls} />
        <Field label="Last Name" required inputCls={inputCls} />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Field label="Email" type="email" required inputCls={inputCls} />
        <Field label="Phone Number" type="tel" required inputCls={inputCls} />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Field label="Address" inputCls={inputCls} />
        <Field label="Unit" inputCls={inputCls} />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Field label="City" inputCls={inputCls} />
        <Field label="State" inputCls={inputCls} />
      </div>
      <div>
        <label className="font-eurostile font-bold text-white text-xs uppercase tracking-wider mb-1.5 block">
          Description
        </label>
        <textarea rows={4} className={`${inputCls} resize-none`} />
      </div>
      <button
        type="submit"
        className="w-full bg-ssi-orange hover:bg-ssi-orange/90 text-white font-eurostile font-bold uppercase tracking-wider text-sm py-4 mt-2 transition"
      >
        Get Your Free Estimate
      </button>
    </form>
  );
}

function Field({
  label,
  type = "text",
  required = false,
  inputCls,
}: {
  label: string;
  type?: string;
  required?: boolean;
  inputCls: string;
}) {
  return (
    <div>
      <label className="font-eurostile font-bold text-white text-xs uppercase tracking-wider mb-1.5 block">
        {label} {required && <span className="text-ssi-orange">*</span>}
      </label>
      <input type={type} className={inputCls} />
    </div>
  );
}
