import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

export const FadeCircle = ({ run, text, circumference }: { run: boolean, text: string, circumference: string }) => {

    const fadeout = keyframes `
            0%{ width: 50px; height: 50px;  }
            100%{ width: 180px; height: 180px;  }
        `
    const fade = keyframes `
       
    `

    return (
        <Box 
            position={'absolute'}
            borderRadius= {'50%'}
            w={'50px'}
            h={'50px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            bg={'lightblue'}
            animation={`${fadeout} 1s alternate infinite`}
            animationPlayState={run ? 'running' : 'paused'}
            zIndex={'8'}
            _after={{
                content: '""',
                w: circumference,
                h: circumference,
                borderRadius: '50%',
                bg: "var(--transColor)",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                animation: `${fade} 1s alternate infinite`,
                animationPlayState: run ? 'running' : 'paused', 
                zIndex: '3'
            }}
        >
            {text}
        </Box>
    )
}