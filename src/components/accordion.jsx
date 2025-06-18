import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage() {
  return (
    <div className="max-w-[770px] mx-auto py-3.5 px-2.5">
      <div>
        <Accordion
        disableGutters
        square={false}
        sx={{
          backgroundColor: '#171923',
          color: '#fff',
          border: '1px solid #2D3748',
          boxShadow: 'none',
          overflow: 'hidden',
          py: '12px',
          mb: '15px',
          px: '16px',
          
          // ✅ Radius for single or grouped accordions
          '&.MuiAccordion-root:first-of-type': {
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
          },
          '&.MuiAccordion-root:last-of-type': {
            borderBottomLeftRadius: '24px',
            borderBottomRightRadius: '24px',
          },
          // Optional: remove before pseudo-element
          '&::before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            minHeight: '48px',
            '&.Mui-expanded': {
              minHeight: '48px',
            },
          }}
        >
          <Typography component="span" sx={{ color: '#fff' ,fontWeight: '600'}}>
            Accordion 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: '#fff' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      </div>
      <div>
        <Accordion
        disableGutters
        square={false}
        sx={{
          backgroundColor: '#171923',
          color: '#fff',
          border: '1px solid #2D3748',
          boxShadow: 'none',
          overflow: 'hidden',
          py: '12px',
          mb: '15px',
          px: '16px',
          
          // ✅ Radius for single or grouped accordions
          '&.MuiAccordion-root:first-of-type': {
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
          },
          '&.MuiAccordion-root:last-of-type': {
            borderBottomLeftRadius: '24px',
            borderBottomRightRadius: '24px',
          },
          // Optional: remove before pseudo-element
          '&::before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            minHeight: '48px',
            '&.Mui-expanded': {
              minHeight: '48px',
            },
          }}
        >
          <Typography component="span" sx={{ color: '#fff' ,fontWeight: '600'}}>
            Is my data safe with your platform?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: '#fff' }}>
          We use encryption protocols to safeguard data transmission, regularly monitor for any vulnerabilities, and implement industry-standard security practices. Rest assured, your data is in safe hands.
        </AccordionDetails>
      </Accordion>
      </div>
      <div>
        <Accordion
        disableGutters
        square={false}
        sx={{
          backgroundColor: '#171923',
          color: '#fff',
          border: '1px solid #2D3748',
          boxShadow: 'none',
          overflow: 'hidden',
          py: '12px',
          mb: '15px',
          px: '16px',
          
          // ✅ Radius for single or grouped accordions
          '&.MuiAccordion-root:first-of-type': {
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
          },
          '&.MuiAccordion-root:last-of-type': {
            borderBottomLeftRadius: '24px',
            borderBottomRightRadius: '24px',
          },
          // Optional: remove before pseudo-element
          '&::before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            minHeight: '48px',
            '&.Mui-expanded': {
              minHeight: '48px',
            },
          }}
        >
          <Typography component="span" sx={{ color: '#fff' ,fontWeight: '600'}}>
            Accordion 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: '#fff' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      </div>
      <div>
        <Accordion
        disableGutters
        square={false}
        sx={{
          backgroundColor: '#171923',
          color: '#fff',
          border: '1px solid #2D3748',
          boxShadow: 'none',
          overflow: 'hidden',
          py: '12px',
          mb: '15px',
          px: '16px',
          
          // ✅ Radius for single or grouped accordions
          '&.MuiAccordion-root:first-of-type': {
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
          },
          '&.MuiAccordion-root:last-of-type': {
            borderBottomLeftRadius: '24px',
            borderBottomRightRadius: '24px',
          },
          // Optional: remove before pseudo-element
          '&::before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            minHeight: '48px',
            '&.Mui-expanded': {
              minHeight: '48px',
            },
          }}
        >
          <Typography component="span" sx={{ color: '#fff' ,fontWeight: '600'}}>
            Accordion 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: '#fff' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      </div>
      <div>
        <Accordion
        disableGutters
        square={false}
        sx={{
          backgroundColor: '#171923',
          color: '#fff',
          border: '1px solid #2D3748',
          boxShadow: 'none',
          overflow: 'hidden',
          py: '12px',
          mb: '15px',
          px: '16px',
          
          // ✅ Radius for single or grouped accordions
          '&.MuiAccordion-root:first-of-type': {
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
          },
          '&.MuiAccordion-root:last-of-type': {
            borderBottomLeftRadius: '24px',
            borderBottomRightRadius: '24px',
          },
          // Optional: remove before pseudo-element
          '&::before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            minHeight: '48px',
            '&.Mui-expanded': {
              minHeight: '48px',
            },
          }}
        >
          <Typography component="span" sx={{ color: '#fff' ,fontWeight: '600'}}>
            Accordion 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: '#fff' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      </div>
      
      
       

      
    </div>
  );
}
