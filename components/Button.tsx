"use client"

function Button({
  text, onChange, isActive
}: {
  text: string, onChange: () => void, isActive?: boolean
}) {
  return (
    <div
      className={`h-[72px] w-full rounded-sm flex flex-row font-medium items-center justify-center border-2 cursor-pointer ${isActive? 'bg-red-600 text-white border-red-600' : 'bg-white text-neutral-600 hover:border-red-600'}`}
      onClick={onChange}
    >
      {text}
    </div>
  )
}

export default Button