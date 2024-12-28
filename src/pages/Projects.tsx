import { useParams } from "react-router-dom"

export default function Projects() {
  const { id } = useParams()
  console.log(id)
  return (
    <>
      <h1>Project Name</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus
        quod minima maiores earum fuga aspernatur iusto recusandae. Aperiam et,
        nihil sit nulla minus magnam facere? Optio impedit inventore doloribus!
      </p>
      <h2>Project details</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus
        quod minima maiores earum fuga aspernatur iusto recusandae. Aperiam et,
        nihil sit nulla minus magnam facere? Optio impedit inventore doloribus!
      </p>
      <img src="https://via.placeholder.com/150" alt="Project" />
      <h2>Release Notes</h2>
      <ul>
        <li>
          v1.2
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            qui aliquid hic quidem similique doloribus illum vel rem
            reprehenderit et, voluptate, tempora libero non quisquam ut! Magnam
            exercitationem repudiandae minima!
          </p>
        </li>
        <li>
          v1.1
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            qui aliquid hic quidem similique doloribus illum vel rem
            reprehenderit et, voluptate, tempora libero non quisquam ut! Magnam
            exercitationem repudiandae minima!
          </p>
        </li>
        <li>
          v1.0
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            qui aliquid hic quidem similique doloribus illum vel rem
            reprehenderit et, voluptate, tempora libero non quisquam ut! Magnam
            exercitationem repudiandae minima!
          </p>
        </li>
      </ul>
    </>
  )
}
