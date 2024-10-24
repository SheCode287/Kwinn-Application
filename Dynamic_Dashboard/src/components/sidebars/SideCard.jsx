
function SideCard( {navigate, icon, title}) {
    return (
        <>
            <li className="mb-[2rem]">
                <a href={navigate} className="flex items-center p-3 text-gray-900 rounded-md dark:text-white hover:bg-[#5577ce] dark:hover:bg-gray-700 group">
                    <div className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#1b59f8] dark:group-hover:text-white" aria-hidden="true" >
                     {icon}
                    </div>
                    <span className="ms-3">{title}</span>
                </a>
            </li>
        </>
    )
}

export default SideCard
