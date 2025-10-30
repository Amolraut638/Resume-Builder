import multer from 'multer';

//creating the storage 
const storage = multer.diskStorage({});

const upload = multer({storage})

export default upload;