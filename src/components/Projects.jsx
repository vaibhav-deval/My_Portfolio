const Projects = ({title,description,imgUrl,link}) => {
  return (
     <a href={link} target="_blank">
      <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer">
        <h4 className="text-xl font-bold">{title}</h4>
        <img src={imgUrl} alt="project img" />
        <p>{description}</p>
      </div>
    </a>

  )
}

export default Projects