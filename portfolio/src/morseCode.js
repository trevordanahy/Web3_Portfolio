export const hexAlphabet = {
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    //needed for prefix to eth address
    x: "-..-"
}

export const gmMorse = "--. --"
export const wagmiMorse = ".-- .- --. -- .."

export function convertToMorse(str) {
    const lowerStr = str.toLowerCase()
    let morseStr = ""

    for (const letter of lowerStr) {
        const morse = hexAlphabet[letter]
        morseStr += morse + " "
    }

    return morseStr
}

