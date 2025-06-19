import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage() {
  return (
    <div>
      {/* text header top part */}
      <div className="text-center mb-[80px] max-w-[800px] mx-auto flex flex-col items-center">
        <div className="flex justify-center mb-6 items-center gap-[5px] border border-teal-400/60 w-[80px] rounded-full px-[5px] py-[3px] bg-teal-400/10 text-teal-400">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg>
          <span>FAQ</span>
        </div>
        <h3 className="text-5xl font-bold mb-4 tracking-wider text-white">
        Some of the things you may want to know
        </h3>
        <p className="text-gray-400 text-[18px] w-[850px]">
        We answered questions so you don’t have to ask them.
        </p>
      </div>

      {/* accordion */}
    <div className="max-w-[770px] mx-auto py-3.5 px-2.5 mb-[300px]">
      <div className='mb-5'>
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
          Is my data safe with your platform?          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: '#fff' }}>
        We use encryption protocols to safeguard data transmission, regularly monitor for any vulnerabilities, and implement industry-standard security practices. Rest assured, your data is in safe hands.
        </AccordionDetails>
      </Accordion>
      </div>
      <div className='mb-5'>
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
            What kind of customer support do you offer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: '#fff' }}>
        We take pride in providing excellent customer support. Our team is readily available to assist you with any queries or issues you may have. We offer various support channels, including email, live chat, and phone support.
        </AccordionDetails>
      </Accordion>
      </div>
      <div className='mb-5'>
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
            How does the pricing for your SaaS solution work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: '#fff' }}>
        We understand that business needs may change, and we aim to provide flexibility to our customers. Please refer to our cancellation policy for any specific terms and conditions regarding subscription cancellations.
        </AccordionDetails>
      </Accordion>
      </div>
      <div className='mb-5'>
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
            Can I cancle my subscription at any time?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: '#fff' }}>
        We understand that business needs may change, and we aim to provide flexibility to our customers. Please refer to our cancellation policy for any specific terms and conditions regarding subscription cancellations.
        </AccordionDetails>
      </Accordion>
      </div>
      <div className=''>
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
          mb: '',
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
            Can I upgrade or downgrade my subscription plan?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: '#fff' }}>
        Yes, you have the flexibility to upgrade or downgrade your subscription plan based on your evolving needs. We understand that your business requirements may change over time, and we strive to provide options that allow you to scale your usage accordingly.
        </AccordionDetails>
      </Accordion>
      </div>
      
      
       

      
    </div>
    </div>
  );
}
