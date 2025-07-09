import { observer } from "mobx-react-lite";
import './Printset.css';
import { getImageListApi, getImageApi, getImageList } from '../http/images/Image_API'
import React from 'react';

export const  Gallery = observer(() => {

    async function getfiles() {
        const filelist = await getImageListApi();
        const files = await getImageList();

        const container = document.getElementById("imageContainer");

        for (let i = 0; i < filelist.length; i++) {
            if(filelist[i].includes('jpg') ||
                filelist[i].includes('png') ||
                filelist[i].includes('JPG') ||
                filelist[i].includes('PNG')) {
                const base64String = await getImageApi(filelist[i]);
                const img = document.createElement("img");

                img.src = base64String;
                img.width = 500;
                img.height = 100;
                container.appendChild(img);
            }
            if(filelist[i].includes('mp4')) {
                const base64String = await getImageApi(filelist[i]);
                const video = document.createElement("video");
                video.src = base64String;
                video.width = 500;
                video.height = 100;
            }

            const children = Array.from(container.children);
            const seen = new Set();

            children.forEach(child => {
                const html = child.outerHTML;
                if (seen.has(html)) {
                    child.remove();
                } else {
                    seen.add(html);
                }
            });
        }

        for (let i = 0; i < files.length; i++) {
            if(filelist[i].includes('JPEG')) {

                const img = document.createElement("img");

                img.src = `${process.env.REACT_APP_API_URL}/images/${filelist[i]}`
                img.width = 500;
                img.height = 100;
                container.appendChild(img);
            }
            if(filelist[i].includes('mp4')) {
                const base64String = await getImageApi(filelist[i]);
                const video = document.createElement("video");
                video.src = base64String;
                video.width = 500;
                video.height = 100;
            }

            const children = Array.from(container.children);
            const seen = new Set();

            children.forEach(child => {
                const html = child.outerHTML;
                if (seen.has(html)) {
                    child.remove();
                } else {
                    seen.add(html);
                }
            });

        }


        return filelist
    }

    getfiles();

    return (
        <div className="scroll-container" style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/n02112137_7.JPEG)`}}>
            <div id="imageContainer" className="gallery">
            </div>
        </div>
    );
});
