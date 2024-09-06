"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { useContext, useEffect, useState } from "react";
import registerApplication from "./_context";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import UserContext from "@/context/UserContext";

const ApplicationFormPage = () => {
  const { user } = useContext<any>(UserContext);
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    applicantName: "",
    address: "",
    phoneNumber: "",
    houseNumber: "",
    aadharCardNumber: "",
    email: "",
    birthCertificate: false,
    birthCertificateValue: "",
    deathCertificate: false,
    deathCertificateValue: "",
    marriageCertificate: false,
    marriageCertificateValue: "",
    residentCertificate: false,
    povertyCertificate: false,
    panchayatCertificate: false,
    toiletCertificate: false,
    propertyNumber: false,
    propertyNumberValue: "",
  });

  const handleSubmit = async () => {
    try {
      const res = await registerApplication(formValues);
      if (res) {
        toast({
          title: "Application Form registered successfully.",
        });
      }
    } catch (error) {
      if (error) {
        toast({
          title: "Application Form registered successfully.",
          variant: "destructive",
        });
      }
    }
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return (
    <>
      <div className="relative bg-primary w-full">
        <PageHeader>
          <PageHeaderHeading className="text-white font-semibold">
            महाराष्ट्र लोकसेवा हक्क अध्यादेश - २०१५ अंतर्गत दाखला / प्रमाणपत्र
            मिळणेकरिता अर्जांचा नमुना
          </PageHeaderHeading>
          <PageHeaderDescription className="text-primary-foreground"></PageHeaderDescription>
        </PageHeader>
      </div>
      <div className="flex justify-center items-center">
        <Card className="w-full flex flex-col justify-center items-center m-6 p-4">
          <h1 className="text-4xl justif-center font-extrabold p-5 lg:text-5xl mb-5 mt-5 ml-6">
            अर्ज
          </h1>
          <div className="w-full">
            <div className="mb-4">
              <Label className="text-xl mb-2 font-semibold">
                अर्जदाराचे नाव
              </Label>
              <Input
                placeholder="अर्जदाराचे नाव"
                type="text"
                value={formValues.applicantName}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    applicantName: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-4">
              <Label className="text-xl mb-2 font-semibold">पत्ता </Label>
              <Input
                type="text"
                placeholder="पत्ता"
                value={formValues.address}
                onChange={(e) =>
                  setFormValues({ ...formValues, address: e.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <Label className="text-xl mb-2 font-semibold">
                दूरध्वनी क्रमांक
              </Label>
              <Input
                placeholder="दूरध्वनी क्रमांक"
                value={formValues.phoneNumber}
                onChange={(e) =>
                  setFormValues({ ...formValues, phoneNumber: e.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <Label className="text-xl mb-2 font-semibold">घर क्रमांक. </Label>
              <Input
                placeholder="घर क्रमांक."
                value={formValues.houseNumber}
                onChange={(e) =>
                  setFormValues({ ...formValues, houseNumber: e.target.value })
                }
              />
            </div>

            <div className="w-full mb-4">
              <Label className="text-xl mb-2 font-semibold">
                आधार कार्ड क्रमांक (असल्यास )
              </Label>
              <div className="w-full space-x-2 flex justify-center items-center">
                <Input
                  type="text"
                  pattern="[0-9]{12}"
                  placeholder="आधार कार्ड क्रमांक"
                  value={formValues.aadharCardNumber}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      aadharCardNumber: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="w-full mb-4">
              <Label className="text-xl mb-2 font-semibold">
                ई-मेल आयडी (असल्यास )
              </Label>
              <div className="w-full space-x-2 flex justify-center items-center">
                <Input
                  type="text"
                  pattern="[0-9]{12}"
                  placeholder="ई-मेल आयडी"
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues({ ...formValues, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="w-full mb-4">
              <Checkbox
                id="जन्म नोंद दाखला"
                checked={formValues.birthCertificate}
                onCheckedChange={() =>
                  setFormValues({
                    ...formValues,
                    birthCertificate: !formValues.birthCertificate,
                  })
                }
              />
              <div>
                <label
                  htmlFor="जन्म नोंद दाखला"
                  className="ml-2 text-l font-semibold"
                >
                  {" "}
                  जन्म नोंद दाखला{" "}
                </label>
                <Input
                  className="max-w-sm"
                  type="text"
                  placeholder="जन्म"
                  value={formValues.birthCertificateValue}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      birthCertificateValue: e.target.value,
                    })
                  }
                  disabled={formValues.birthCertificate === false}
                />
              </div>
            </div>

            <div className="w-full mb-4">
              <Checkbox
                id="मृत्यू नोंद दाखला"
                checked={formValues.deathCertificate}
                onCheckedChange={() =>
                  setFormValues({
                    ...formValues,
                    deathCertificate: !formValues.deathCertificate,
                  })
                }
              />
              <div>
                <label
                  htmlFor="मृत्यू नोंद दाखला"
                  className="ml-2 text-l font-semibold"
                >
                  {" "}
                  मृत्यू नोंद दाखला{" "}
                </label>
                <Input
                  className="max-w-sm"
                  type="text"
                  placeholder="मृत्यू"
                  value={formValues.deathCertificateValue}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      deathCertificateValue: e.target.value,
                    })
                  }
                  disabled={formValues.deathCertificate === false}
                />
              </div>
            </div>

            <div className="w-full mb-4">
              <Checkbox
                id="विवाह नोंदणी दाखला"
                checked={formValues.marriageCertificate}
                onCheckedChange={() =>
                  setFormValues({
                    ...formValues,
                    marriageCertificate: !formValues.marriageCertificate,
                  })
                }
              />
              <div>
                <label
                  htmlFor="विवाह नोंदणी दाखला"
                  className="ml-2 text-l font-semibold"
                >
                  {" "}
                  विवाह नोंदणी दाखला{" "}
                </label>
                <Input
                  className="max-w-sm"
                  type="text"
                  placeholder="विवाह"
                  value={formValues.marriageCertificateValue}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      marriageCertificateValue: e.target.value,
                    })
                  }
                  disabled={formValues.marriageCertificate === false}
                />
              </div>
            </div>

            <div className="w-full mb-4">
              <Checkbox
                id="रहिवासी दाखला"
                checked={formValues.residentCertificate}
                onCheckedChange={() =>
                  setFormValues({
                    ...formValues,
                    residentCertificate: !formValues.residentCertificate,
                  })
                }
              />
              <label
                htmlFor="रहिवासी दाखला"
                className="ml-2 text-l font-semibold"
              >
                {" "}
                रहिवासी दाखला{" "}
              </label>
            </div>

            <div className="w-full mb-4">
              <Checkbox
                id="दारिद्र्य रेषेखालील दाखला (निशुल्क)"
                checked={formValues.povertyCertificate}
                onCheckedChange={() =>
                  setFormValues({
                    ...formValues,
                    povertyCertificate: !formValues.povertyCertificate,
                  })
                }
              />
              <label
                htmlFor="दारिद्र्य रेषेखालील दाखला (निशुल्क)"
                className="ml-2 text-l font-semibold"
              >
                {" "}
                दारिद्र्य रेषेखालील दाखला (निशुल्क){" "}
              </label>
            </div>

            <div className="w-full mb-4">
              <Checkbox
                id="ग्रामपंचायत येणे बाकी दाखला"
                checked={formValues.panchayatCertificate}
                onCheckedChange={() =>
                  setFormValues({
                    ...formValues,
                    panchayatCertificate: !formValues.panchayatCertificate,
                  })
                }
              />
              <label
                htmlFor="ग्रामपंचायत येणे बाकी दाखला"
                className="ml-2 text-l font-semibold"
              >
                {" "}
                ग्रामपंचायत येणे बाकी दाखला{" "}
              </label>
            </div>

            <div className="w-full mb-4">
              <Checkbox
                id="शौचालयाचा दाखला"
                checked={formValues.toiletCertificate}
                onCheckedChange={() =>
                  setFormValues({
                    ...formValues,
                    toiletCertificate: !formValues.toiletCertificate,
                  })
                }
              />
              <label
                htmlFor="शौचालयाचा दाखला"
                className="ml-2 text-l font-semibold"
              >
                {" "}
                शौचालयाचा दाखला{" "}
              </label>
            </div>

            <div className="flex w-full mb-4">
              <Checkbox
                id="नमुना नं. ८ चा उतारा (मालमत्ता कर आकारणी नोंदवही उतारा) घर नं."
                checked={formValues.propertyNumber}
                onCheckedChange={() =>
                  setFormValues({
                    ...formValues,
                    propertyNumber: !formValues.propertyNumber,
                  })
                }
              />
              <div>
                <label
                  htmlFor="नमुना नं. ८ चा उतारा (मालमत्ता कर आकारणी नोंदवही उतारा) घर नं."
                  className="ml-2 text-l font-semibold"
                >
                  {" "}
                  नमुना नं. ८ चा उतारा (मालमत्ता कर आकारणी नोंदवही उतारा) घर नं.{" "}
                </label>
                <Input
                  className="max-w-sm"
                  type="text"
                  placeholder="घर नं."
                  value={formValues.propertyNumberValue}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      propertyNumberValue: e.target.value,
                    })
                  }
                  disabled={formValues.propertyNumber === false}
                />
              </div>
            </div>

            <Button className="w-full" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ApplicationFormPage;
