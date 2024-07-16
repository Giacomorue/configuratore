"use client"

function Button({
  text, onChange, isActive
}: {
  text: string, onChange: () => void, isActive?: boolean
}) {
  return (
    <div
      className={`rounded-xs border-2 px-16 py-6 cursor-pointer ${isActive? 'bg-red-500 text-white border-red-500' : 'bg-white text hover:border-red-500'}`}
      onClick={onChange}
    >
      {text}
    </div>
  )
}

export default Button