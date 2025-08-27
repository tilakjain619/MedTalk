import React, {useState} from 'react'
import axios from 'axios';

const VerifyMedicinePopup = ({ setShowVerifyMedicinePopup, medicineSummary, speak }) => {
    const [imageMedicineData, setImageMedicineData] = useState(null);
    const [medicationVerification, setMedicationVerification] = useState("");
    const [verificationLoading, setVerificationLoading] = useState(false);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageMedicineData(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
    const handleAnalyseImage = async () => {
        if (!imageMedicineData) return; // Ensure an image is uploaded
        try {
            setVerificationLoading(true);
            const medicineText = await puter.ai.img2txt(imageMedicineData);
            console.log(medicineText);
            
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/verify`, {
                medicineSummary: medicineSummary,
                medicineText: medicineText
            });

            const data = response.data;
            
            setMedicationVerification(data.summary || "No verification available.");
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(data.summary || "No verification available.");
            speak && window.speechSynthesis.speak(utterance);
        } catch (error) {
            console.error('Error analyzing image:', error);
            setMedicationVerification("Error analyzing the medicine image. Please try again.");
        }
        finally {
            setVerificationLoading(false);
        }
    }
    return (
        <div className='fixed w-[90%] sm:w-[80%] md:w-[65%] lg:w-[50%] z-20 top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg'>
            <button onClick={() => setShowVerifyMedicinePopup(false)} className='block float-right text-sm bg-gray-800 text-gray-300 hover:bg-gray-700 cursor-pointer px-2 py-0.5 rounded-md'>Close</button>
            <h2 className='text-lg font-semibold'>Verify Medicines</h2>
            <p className='text-sm text-gray-400 mt-1 text-pretty'>Upload a medicine image or purchase bill for verification. MedTalk will cross verify to check if the medicines bought match the prescription.</p>
            <div>
                <div className="relative mt-3 w-full">
                    <input
                        type="file"
                        accept="image/*"
                        id="file"
                        onChange={handleImageUpload}
                        className="block w-full px-4 py-3 text-sm text-gray-400 rounded-lg border border-gray-700 cursor-pointer bg-gray-900 shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                {
                    imageMedicineData && (
                        <div className="mt-2">
                            {/* <img src={imageMedicineData} alt="Uploaded Medicine" className="w-full object-cover object-center max-h-28 rounded-lg" /> */}
                            <button onClick={handleAnalyseImage} className={`mt-2 px-4 cursor-pointer hover:bg-blue-700 py-2 bg-blue-600 text-white rounded-md ${verificationLoading && 'animate-pulse'}`}>{verificationLoading ? 'Verifying...' : 'Verify Medicine'}</button>
                        </div>
                    )
                }
                {
                    medicationVerification && (
                        <div className="mt-4">
                            <p className="text-md mt-1 text-gray-300">{medicationVerification}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default VerifyMedicinePopup
