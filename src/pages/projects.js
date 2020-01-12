/** @jsx jsx */
import { jsx } from "theme-ui"
import { Styled } from "theme-ui"

import Layout from "../components/layout"
import ProjectCard from "../components/project-card"
import SEO from "../components/seo"

const ProjectsPage = () => {
  return (
    <Layout bg="background2">
      <SEO title="Projects" description="Projects by Matt Swain" />
      <Styled.h1>Projects</Styled.h1>
      <ProjectCard
        title="ChemDataExtractor"
        href="http://chemdataextractor.org"
        description="Automatically extract chemical information from scientific documents."
      />
      <ProjectCard
        title="MolVS"
        href="https://github.com/mcs07/MolVS"
        description="Molecule Validation and Standardization."
      />
      <ProjectCard
        title="PubChemPy"
        href="https://github.com/mcs07/PubChemPy"
        description="Python wrapper for the PubChem PUG REST API."
      />
      <ProjectCard
        title="ChemSpiPy"
        href="https://github.com/mcs07/ChemSpiPy"
        description="Python wrapper for the ChemSpider REST API."
      />
      <ProjectCard
        title="CIRpy"
        href="https://github.com/mcs07/CIRpy"
        description="Python wrapper for the NCI Chemical Identifier Resolver."
      />
      <ProjectCard
        title="docker-rdkit"
        href="https://github.com/mcs07/docker-rdkit"
        description="RDKit Docker images."
      />
      <ProjectCard
        title="docker-chempaper"
        href="https://github.com/mcs07/docker-chempaper"
        description="Docker image with pandoc and LaTeX for writing chemistry papers."
      />
    </Layout>
  )
}

export default ProjectsPage
