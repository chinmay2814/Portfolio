// src/components/ProjectCard.js
import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card elevation={3} sx={{ maxWidth: 345, mx: 'auto', cursor: 'pointer' }} onClick={handleOpen}>
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

      {/* Modal / Lightbox */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          {project.title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {/* Optional Project Image */}
          {project.image && (
            <CardMedia
              component="img"
              image={project.image}
              alt={project.title}
              sx={{ mb: 2 }}
            />
          )}
          <Typography variant="body1" color="textPrimary">
            {project.description}
          </Typography>
          {/* Add more details if required */}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
