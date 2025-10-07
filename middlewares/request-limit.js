import rateLimit from "express-rate-limit";

const requestLimit = rateLimit({
    windowsMs: 15 * 60 * 1000,
    max: 100
})

export default requestLimit