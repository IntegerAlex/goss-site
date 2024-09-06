import axios from "axios";
import APP_HOST from "@/configs/envVariables";

const registerApplication = async (data: any) => {
  const applicationDetails = {
    applicantName: data.applicantName,
    address: data.address,
    phoneNumber: data.phoneNumber,
    houseNumber: data.houseNumber,
    aadharCardNumber: data.aadharCardNumber,
    email: data.email,
    birthCertificate: data.birthCertificate,
    birthCertificateValue: data.birthCertificateValue,
    deathCertificate: data.deathCertificate,
    deathCertificateValue: data.deathCertificateValue,
    marriageCertificate: data.marriageCertificate,
    marriageCertificateValue: data.marriageCertificateValue,
    residentCertificate: data.residentCertificate,
    povertyCertificate: data.povertyCertificate,
    panchayatCertificate: data.panchayatCertificate,
    toiletCertificate: data.toiletCertificate,
    propertyNumber: data.propertyNumber,
    propertyNumberValue: data.propertyNumberValue,
  };

  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(
      `${APP_HOST}/api/application/create`,
      JSON.stringify(applicationDetails),
      { headers }
    );

    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

export default registerApplication;
