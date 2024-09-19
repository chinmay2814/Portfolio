// src/components/ProjectCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const ProjectCard = ({ project }) => {
  return (
    <Card elevation={3} sx={{ maxWidth: 345, mx: 'auto' }}>
      {/* Optional Project Image */}
      {project.image && (
        <CardMedia
          component="img"
          height="140"
          image={project.image}
          alt={project.title}
        />
      )}
      <CardContent>
        <Typography variant="h5" component="div" color="textPrimary" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
