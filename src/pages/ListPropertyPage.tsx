
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from '@/components/ui/use-toast';

const ListPropertyPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    propertyName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    description: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    roomCount: '',
    hasWifi: false,
    hasParking: false,
    hasPool: false,
    hasFitnessCenter: false,
    hasRestaurant: false,
    isAccessible: false,
    isPetFriendly: false,
    images: [] as File[],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        images: Array.from(e.target.files),
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please login to list your property.",
      });
      navigate("/login", { state: { from: '/list-property' } });
      return;
    }

    // Validate form
    if (!formData.propertyName || !formData.address || !formData.city || 
        !formData.country || !formData.description || !formData.contactName || 
        !formData.contactEmail || !formData.contactPhone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Property Submitted",
        description: "Your property has been submitted for review. Our team will contact you soon.",
      });

      // Reset form
      setFormData({
        propertyName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        description: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        roomCount: '',
        hasWifi: false,
        hasParking: false,
        hasPool: false,
        hasFitnessCenter: false,
        hasRestaurant: false,
        isAccessible: false,
        isPetFriendly: false,
        images: [],
      });

    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your property. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="hotel-container py-12">
        <h1 className="text-3xl font-bold mb-2 hotel-heading">List Your Property</h1>
        <p className="text-gray-600 mb-8">Join our network of premium properties and start earning today.</p>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Property Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Property Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="propertyName">Property Name*</Label>
                  <Input
                    id="propertyName"
                    name="propertyName"
                    value={formData.propertyName}
                    onChange={handleInputChange}
                    placeholder="e.g. Sunset Beach Resort"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="roomCount">Number of Rooms*</Label>
                  <Input
                    id="roomCount"
                    name="roomCount"
                    type="number"
                    value={formData.roomCount}
                    onChange={handleInputChange}
                    placeholder="e.g. 10"
                    className="mt-1"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="description">Property Description*</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your property, its unique features, and what makes it special..."
                    className="mt-1 h-32"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label htmlFor="address">Street Address*</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="e.g. 123 Beach Drive"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="city">City*</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Miami"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="state">State/Province</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="e.g. Florida"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode">Zip/Postal Code</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="e.g. 33139"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country*</Label>
                  <Input
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="e.g. United States"
                    className="mt-1"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="hasWifi" 
                    checked={formData.hasWifi}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange("hasWifi", checked === true)
                    } 
                  />
                  <label
                    htmlFor="hasWifi"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Wi-Fi
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="hasParking" 
                    checked={formData.hasParking}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange("hasParking", checked === true)
                    } 
                  />
                  <label
                    htmlFor="hasParking"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Parking
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="hasPool" 
                    checked={formData.hasPool}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange("hasPool", checked === true)
                    } 
                  />
                  <label
                    htmlFor="hasPool"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Swimming Pool
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="hasFitnessCenter" 
                    checked={formData.hasFitnessCenter}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange("hasFitnessCenter", checked === true)
                    } 
                  />
                  <label
                    htmlFor="hasFitnessCenter"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Fitness Center
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="hasRestaurant" 
                    checked={formData.hasRestaurant}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange("hasRestaurant", checked === true)
                    } 
                  />
                  <label
                    htmlFor="hasRestaurant"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Restaurant
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="isAccessible" 
                    checked={formData.isAccessible}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange("isAccessible", checked === true)
                    } 
                  />
                  <label
                    htmlFor="isAccessible"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Wheelchair Accessible
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="isPetFriendly" 
                    checked={formData.isPetFriendly}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange("isPetFriendly", checked === true)
                    } 
                  />
                  <label
                    htmlFor="isPetFriendly"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Pet Friendly
                  </label>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="contactName">Contact Name*</Label>
                  <Input
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    placeholder="e.g. John Smith"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contactEmail">Email Address*</Label>
                  <Input
                    id="contactEmail"
                    name="contactEmail"
                    type="email"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    placeholder="e.g. john@example.com"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contactPhone">Phone Number*</Label>
                  <Input
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    placeholder="e.g. (555) 123-4567"
                    className="mt-1"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Property Images */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Property Images</h2>
              <Label htmlFor="images">Upload Images (Max 10)</Label>
              <Input
                id="images"
                name="images"
                type="file"
                onChange={handleFileChange}
                className="mt-1"
                accept="image/*"
                multiple
                max={10}
              />
              <p className="text-xs text-gray-500 mt-1">
                You can select multiple images. Maximum 10MB per image.
              </p>
              
              {formData.images.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">{formData.images.length} file(s) selected:</p>
                  <ul className="text-xs text-gray-600">
                    {Array.from(formData.images).map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" required />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the terms and conditions*
                  </label>
                  <p className="text-xs text-gray-500">
                    By submitting this form, I agree to the processing of my data as outlined in the Privacy Policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full md:w-auto hotel-button-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Property"}
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ListPropertyPage;
