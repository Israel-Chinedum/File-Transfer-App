import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

export const FadeCircle = ({ run, text, circumference }: { run: boolean, text: string, circumference: string }) => {

    const fadeout = keyframes `
            0%{ width: 50px; height: 50px;  }
            100%{ width: 180px; height: 180px;  }
        `
    const fade = keyframes `
       0%{ opacity: 1 }
       100%{ opacity: 0 }
    `

    return (
        <Box 
            fontWeight={'bolder'}
            borderRadius= {'50%'}
            w={'50px'}
            h={'50px'}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            bg={'var(--transColor)'}
            animation={`${fadeout} 0.5s alternate infinite`}
            animationPlayState={run ? 'running' : 'paused'}
            _after={{
                content: `'${text}'`,
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
            }}
        >
        </Box>
    )
}