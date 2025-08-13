import {
  FaFile,
  FaFilePdf,
  FaFileImage,
  FaFileAudio,
  FaFileVideo,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaFileArchive,
  FaFileCode,
  FaFileAlt,
  FaFileCsv,
  FaMarkdown,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaPython,
  FaJava,
  FaTerminal,
} from "react-icons/fa";
import { SiTypescript, SiC, SiCplusplus } from "react-icons/si";
import { LuSend } from "react-icons/lu";





// EXPORT ICONS
export const icons = {
    FaFile,
    FaFilePdf,
    FaFileImage,
    FaFileAudio,
    FaFileVideo,
    FaFileWord,
    FaFileExcel,
    FaFilePowerpoint,
    FaFileArchive,
    FaFileCode,
    FaFileAlt,
    FaFileCsv,
    FaMarkdown,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaPhp,
    FaPython,
    FaJava,
    FaTerminal,
    SiTypescript,
    SiC,
    SiCplusplus,
    LuSend
}






// EXPORT MIME TYPES AND ICONS
export const MIMETypesAndIcons = [
    // Images
    { type: "image/jpeg", icon: FaFileImage },
    { type: "image/png", icon: FaFileImage },
    { type: "image/gif", icon: FaFileImage },
    { type: "image/webp", icon: FaFileImage },
    { type: "image/bmp", icon: FaFileImage },
    { type: "image/svg+xml", icon: FaFileImage },
    { type: "image/x-icon", icon: FaFileImage },
    { type: "image/tiff", icon: FaFileImage },

    // Documents
    { type: "application/pdf", icon: FaFilePdf },
    { type: "application/msword", icon: FaFileWord },
    {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      icon: FaFileWord,
    },
    { type: "application/vnd.ms-excel", icon: FaFileExcel },
    {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      icon: FaFileExcel,
    },
    { type: "application/vnd.ms-powerpoint", icon: FaFilePowerpoint },
    {
      type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      icon: FaFilePowerpoint,
    },
    { type: "text/plain", icon: FaFileAlt },
    { type: "text/csv", icon: FaFileCsv },
    { type: "application/rtf", icon: FaFileAlt },
    { type: "application/vnd.oasis.opendocument.text", icon: FaFileAlt },
    { type: "text/markdown", icon: FaMarkdown },

    // Audio
    { type: "audio/mpeg", icon: FaFileAudio },
    { type: "audio/wav", icon: FaFileAudio },
    { type: "audio/ogg", icon: FaFileAudio },
    { type: "audio/mp4", icon: FaFileAudio },
    { type: "audio/aac", icon: FaFileAudio },
    { type: "audio/flac", icon: FaFileAudio },

    // Video
    { type: "video/mp4", icon: FaFileVideo },
    { type: "video/quicktime", icon: FaFileVideo },
    { type: "video/x-msvideo", icon: FaFileVideo },
    { type: "video/webm", icon: FaFileVideo },
    { type: "video/x-matroska", icon: FaFileVideo },
    { type: "video/x-ms-wmv", icon: FaFileVideo },
    { type: "video/x-flv", icon: FaFileVideo },

    // Archives
    { type: "application/zip", icon: FaFileArchive },
    { type: "application/vnd.rar", icon: FaFileArchive },
    { type: "application/x-7z-compressed", icon: FaFileArchive },
    { type: "application/x-tar", icon: FaFileArchive },
    { type: "application/gzip", icon: FaFileArchive },

    // Code/Source
    { type: "text/html", icon: FaHtml5 },
    { type: "text/css", icon: FaCss3Alt },
    { type: "text/javascript", icon: FaJs },
    { type: "application/typescript", icon: SiTypescript },
    { type: "application/json", icon: FaFileCode },
    { type: "application/xml", icon: FaFileCode },
    { type: "application/x-httpd-php", icon: FaPhp },
    { type: "text/x-python", icon: FaPython },
    { type: "text/x-java-source", icon: FaJava },
    { type: "text/x-c", icon: SiC },
    { type: "text/x-c++", icon: SiCplusplus },
    { type: "application/x-sh", icon: FaTerminal },
  ];