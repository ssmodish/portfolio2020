/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const projects = [
        {
          id: 1,
          title: "Flytelog",
          description: "This project was developed by 5 people over the course of five weeks. While my focus was on devops, form building, and styling, I contributed to all parts of this project.",
          deployed_link: "https://lab9-flightlogs.firebaseapp.com/",
          github_link: "https://github.com/Lambda-School-Labs/labs9-flight-log",
          image: "Flytelog_Screenshot.PNG"
        },
        {
          id: 2,
          title: "UseMyStuff",
          description: "This project was developed by 7 people over the course of four days. My role as team leader was to facilitate communication between the developers who were at different stages in their education.",
          deployed_link: "https://bw2-techstuff.netlify.com/",
          github_link: "https://github.com/lambda-build-week-2-use-my-tech-stuff"
        },
        {
          id: 3,
          title: "Lambda Notes",
          description: "This project was developed by me alone over two five day sessions - one for the front end and one for the backend.",
          deployed_link: "",
          github_link: "https://github.com/ssmodish/lambda-notes-redux"
        }
      ]
  
    projects.forEach(project => {
      const node  = {
        id: createNodeId(`Project-${project.id}`),
        title: project.title,
        description: project.description,
        deployed_link: project.deployed_link,
        github_link: project.github_link,
        internal: {
          type: "Project",
          contentDigest: createContentDigest(project),
        },
      }
      actions.createNode(node)
    })
  }


