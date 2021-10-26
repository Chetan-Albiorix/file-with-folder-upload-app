import Uploady from "@rpldy/uploady";
import UploadDropZone from "@rpldy/upload-drop-zone";
import { getFilesFromDragEvent } from "html-dir-content";

const FileUpload = () => {
    
    const onDropFile = (event) => {
        getFilesFromDragEvent(event, { withFullPath: true, recursive: true })
        .then((files) => {
            // you get hard disk path with folder structure
            console.log(files);
        });
    }


    return (<Uploady destination={{url: "https://my-server", headers: {"x-custom": "123"}}}>
        <UploadDropZone onDragOverClassName="drag-over"
                        grouped={false}
                        dropHandler={onDropFile}
                        maxGroupSize={5}>
            <span>Drag&Drop File(s) Here</span>            
        </UploadDropZone>
    </Uploady>);
}

export default FileUpload;