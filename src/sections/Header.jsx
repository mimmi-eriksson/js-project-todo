const Header = () => {
  return (
    <header className="w-full">
      <div className="bg-primary dark:bg-secondary text-secondary dark:text-primary flex justify-between items-center p-4">
        <h1 className="text-3xl font-semibold">TO DO LIST</h1>
        <p className="self-start">Toggle mode</p>
      </div>
    </header>
  )
}

export default Header