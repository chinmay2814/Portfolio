// src/components/Projects.js
import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component
import HMP_OJ_Image from '../images/HMP_OJ.png';
import Cadence_Image from '../images/Cadence.png';
import PFM_Image from '../images/PFM.png';

const projects = [
  { id: 1, title: 'HMP_OJ', description:  'HMP_OJ is a robust online judge platform designed for competitive programming. It features a diverse problem set with various difficulty levels, real-time judging that provides immediate feedback on submissions, and the ability to host and participate in timed coding contests. Users can track their progress through detailed profiles and leaderboards, and use an integrated code editor.', image: HMP_OJ_Image },
  { id: 2, title: 'Cadence Editor', description: 'The Online Real-Time Collaborative Editor is a dynamic platform designed for seamless, real-time coding collaboration. Built using ReactJS for the front end and NodeJS with ExpressJS for the back end, this editor allows multiple users to work together on code simultaneously. Features include syntax highlighting, live code sharing, and real-time updates, ensuring that all participants see changes instantly.', image: Cadence_Image },
  { id: 3, title: 'Personal Finance', description: 'The Personal Finance Management System is a C++ application designed to help users manage their finances effectively. Leveraging Object-Oriented Programming (OOP) concepts, the system organizes financial data into classes and objects, facilitating easy tracking of income, expenses, and budgets. Users can categorize transactions, generate detailed financial reports, and set budget goals.' , image: PFM_Image },
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" color="textPrimary" textAlign="center" gutterBottom>
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <ProjectCard project={project} /> {/* Use the ProjectCard */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
