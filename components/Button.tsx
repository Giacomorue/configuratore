"use client"

function Button({
  text, onChange, isActive
}: {
  text: string, onChange: () => void, isActive?: boolean
}) {
  return (
    <div
      className={`border-2 rounded-md px-12 py-6 cursor-pointer ${isActive ? "border-red-500": "border-neutral-400"}`}
      onClick={onChange}
    >
      {text}
    </div>
  )
}

export default Button