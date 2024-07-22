"use client"

function Button({
  text, onChange, isActive
}: {
  text: string, onChange: () => void, isActive?: boolean
}) {
  return (
    <div
      className={`rounded-md border-2 px-16 py-6 cursor-pointer ${isActive? 'bg-red-600 text-white border-red-600' : 'bg-white text hover:border-red-600'}`}
      onClick={onChange}
    >
      {text}
    </div>
  )
}

export default Button