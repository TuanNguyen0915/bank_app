const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`${styles} py-4 px-6 bg-blue-gradient rounded-lg text-[18px] font-poppins text-primary outline-none`}
    >
      Get Started
    </button>
  )
}
export default Button
