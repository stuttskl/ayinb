import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

 export default function CircularProgressWithLabel(props) {
  const [progress, setProgress] = React.useState(0);
  let progressPercentage = (props.value / props.totalPages) * 100;

  React.useEffect(() => {
    setProgress(progressPercentage);
  }, [progressPercentage]); 

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress 
        size={120} 
        variant="determinate" 
        thickness={1.5}
        value={progress}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
      <Typography variant="caption" component="div" color="textSecondary">
        {` ${Math.round(progressPercentage.toFixed())}%`}
      </Typography>
      </Box>
    </Box>
  );
}