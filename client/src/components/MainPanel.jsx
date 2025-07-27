import React, { useState } from 'react'
import remarkGfm from 'remark-gfm'
import Markdown from 'react-markdown'
import axios from 'axios'

const MainPanel = ({ speak, chatHistory, setChatHistory }) => {
    const [imageData, setImageData] = useState(null);
    const [medicationInsights, setMedicationInsights] = useState("");
    const [insightsLoading, setInsightsLoading] = useState(false);
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageData(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleAnalyseImage = async () => {
        if (!imageData) return; // Ensure an image is uploaded
        try {
            setInsightsLoading(true);
            const prescriptionText = await puter.ai.img2txt(imageData);
            console.log("Extracted Text:", prescriptionText);

            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/upload`, {
                prescriptionText: prescriptionText,
            });

            const data = response.data;
            console.log(data);
            setChatHistory([...chatHistory, { summary: data.summary || "No insights available." }]);
            setMedicationInsights(data.summary || "No insights available.");
            const utterance = new SpeechSynthesisUtterance(data.summary || "No insights available.");
            speak && window.speechSynthesis.speak(utterance);
        } catch (error) {
            console.error('Error analyzing image:', error);
            setMedicationInsights("Error analyzing the prescription. Please try again.");
        }
        finally {
            setInsightsLoading(false);
        }
    }
    return (
        <div className='sm:w-[60%] md:w-[70%] mb-14 sm:mb-0 sm:border sm:rounded-3xl sm:p-4 md:p-8 sm:border-gray-600 sm:bg-gray-800 '>
            <div>
                {
                    !imageData || medicationInsights.length <= 0 ? (
                        <>
                            <label htmlFor="file" className="block mb-2 text-lg font-semibold text-blue-400">
                                Upload a Prescription
                            </label>
                            <div className="relative w-full">
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="file"
                                    onChange={handleImageUpload}
                                    className="block w-full px-4 py-3 text-sm text-gray-400 rounded-lg border border-gray-700 cursor-pointer bg-gray-900 shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        </>
                    )
                :
                <div>
                    <h2 className='text-2xl text-blue-600'>MedTalk</h2>
                    </div>}

                {imageData && medicationInsights.length <= 0 && (
                    <div className='grid gap-2 justify-center'>
                        <img src={imageData} alt="Preview" className='w-2/4 mx-auto mt-2' />
                        <button onClick={handleAnalyseImage} className={`bg-blue-600 mx-auto w-fit text-white px-5 cursor-pointer hover:bg-blue-700 py-1.5 rounded-full ${insightsLoading && 'animate-pulse'}`}>Submit</button>
                    </div>
                )}
            </div>
            <div className='mt-3 overflow-y-auto mb-4 sm:h-[75vh]'>
                <Markdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: ({ node, ...props }) => <h1 className="text-2xl font-bold my-2" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-xl font-semibold my-2" {...props} />,
                        h3: ({ node, ...props }) => <h3 className="text-lg font-semibold my-2" {...props} />,
                        h4: ({ node, ...props }) => <h4 className="text-base font-semibold my-2" {...props} />,
                        h5: ({ node, ...props }) => <h5 className="text-base font-semibold my-2" {...props} />,
                        h6: ({ node, ...props }) => <h6 className="text-base font-semibold my-2" {...props} />,
                        p: ({ node, ...props }) => <p className="text-md my-2" {...props} />,
                    }}
                >
                    {medicationInsights || "Please upload a prescription."}
                </Markdown>
            </div>
        </div>
    )
}

export default MainPanel
