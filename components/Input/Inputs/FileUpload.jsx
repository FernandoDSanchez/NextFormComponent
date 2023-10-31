import { useFormikContext, ErrorMessage } from "formik";
import ArrowIcon from "../../icons/ArrowIcon";
import { useState } from 'react';

const FileUpload = ({ name, title, placeholder, required, maxSize, accept }) => {
  const { setFieldValue } = useFormikContext();
  const [imageSrc, setImageSrc] = useState(null);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      // This is an image file
      setFieldValue(name, file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);  // Set image URL
      };
      reader.readAsDataURL(file);
    } else {
      // Not an image file
      console.warn("Uploaded file is not an image.");
      setImageSrc(null);  // Reset image URL
    }
  };

  return (
    <div className="flex flex-col pb-10">
     {imageSrc && <img src={imageSrc} alt="Preview" />}
      {title && <span>{title}</span>}
      {title && (
        <label
          htmlFor={name}
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-white hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <ArrowIcon />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id={name}
            name={name}
            type="file"
            placeholder={placeholder}
            required={required}
            max={maxSize}
            accept={accept}
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      )}
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default FileUpload;
