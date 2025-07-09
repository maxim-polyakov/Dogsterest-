import { observer } from "mobx-react-lite";
import './Printset.css';
import { getImageList } from '../http/images/Image_API'
import React from 'react';

export const  Gallery = () => {
    let files;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function getfiles() {
        const filelist = await getImageList();
        const container = document.getElementById("imageContainer");

        for (let i = 0; i < filelist.length; i++) {
            const img = document.createElement("img");
            img.src = `${process.env.REACT_APP_API_URL}/${filelist[i]}`
            img.width = 300;
            img.height = 300;
            container.appendChild(img);
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

        return filelist
    }

    getfiles();

    return (
        <div className="scroll-container" style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/n02112137_7.JPEG)`}}>
            <div id="imageContainer" className="gallery">
            </div>
        </div>
    );
};
