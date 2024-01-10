import { Request, Response, NextFunction } from "express";
import asyncHandler from "../utils/asyncHandler";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import { uploadOnCloudinary } from "../utils/cloudinary";

// const uploadFile = asyncHandler(async (req, res, next) => {
//   if (!req.file) {
//     return next(new ApiError(400, 'Please upload a file'));
//   }

//   const fileLocalPath = req.files?.chirpImage[0]?.path;
//   const fileUploaded = await uploadOnCloudinary(fileLocalPath);
//   if (!fileUploaded) {
//     return next(new ApiError(500, 'Something went wrong'));
//   }

//   const { url, public_id } = fileUploaded;
//   const data = { url, public_id };
//   return res.status(201).json(new ApiResponse(201, data, 'File uploaded successfully'));
// });

const uploadFile = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
      return next(new ApiError(400, "Please upload a file"));
    }

    const fileLocalPath = req.file.path; // Assuming 'chirpImage' is the field name for the file upload
    const fileUploaded = await uploadOnCloudinary(fileLocalPath);

    if (!fileUploaded) {
      return next(new ApiError(500, "Something went wrong"));
    }

    const { url, public_id } = fileUploaded;
    const data = { url, public_id };
    return res
      .status(201)
      .json(new ApiResponse(201, data, "File uploaded successfully"));
  }
);

// const uploadFile = asyncHandler(async (req, res, next) => {
//   try {
//     return res.status(201).json(
//       new ApiResponse(
//         201,
//         {
//           message: "File uploaded successfully",
//         },
//         "File uploaded successfully"
//       )
//     );
//   } catch (error) {
//     return res.status(500).json(new ApiError(500, "Something went wrong"));
//   }
// });

export default uploadFile;
