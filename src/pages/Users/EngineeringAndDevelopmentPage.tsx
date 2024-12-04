import React, { useState } from 'react';
import { HiBriefcase } from 'react-icons/hi';  

const EngineeringAndDevelopmentPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [isWorking, setIsWorking] = useState(false);
  const [position, setPosition] = useState('');
  const [skills, setSkills] = useState('');
  const [category, setCategory] = useState('');
  const [resume, setResume] = useState(null);
  const [motivation, setMotivation] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [role, setRole] = useState('');
  const [otherRole, setOtherRole] = useState('');
  const [internshipType, setInternshipType] = useState(''); 
  const [collegeName, setCollegeName] = useState(''); 
  const [passingYear, setPassingYear] = useState(''); 
  const [admissionYear, setAdmissionYear] = useState(''); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', backgroundColor: '#e0f7fa', borderRadius: '8px', border: '1px solid #b3e1e6' }}>
      <div className="w-full max-w-8xl p-12 bg-white shadow-md rounded-lg border border-[#b3e1e6]">
        {/* Icon on top of heading */}
        <div className="text-center mb-6">
          <HiBriefcase size={40} color="#0288d1" />
        </div>

        <h2 className="text-4xl font-bold text-center mb-4 text-blue-700">Engineering and Development</h2>
        <p className="text-center mb-10 text-gray-600">Apply or know about exciting engineering and development opportunities.</p>

        <form onSubmit={handleSubmit}>
          {/* Basic Information */}
          <div className="mb-7">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border rounded bg-white hover:border-blue-500 focus:border-blue-500 transition-colors"
              required
            />
          </div>
          <div className="mb-7">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded bg-white hover:border-blue-500 focus:border-blue-500 transition-colors"
              required
            />
          </div>
          <div className="mb-7">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-3 p-2 w-full border rounded bg-white hover:border-blue-500 focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
              <input
                type="text"
                id="addressLine1"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                className="mt-1 p-2 w-full border rounded bg-white hover:border-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">Address Line 2</label>
              <input
                type="text"
                id="addressLine2"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
                className="mt-1 p-2 w-full border rounded bg-white hover:border-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700">Pin Code</label>
              <input
                type="text"
                id="pinCode"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                className="mt-1 p-2 w-3/4 border rounded bg-white hover:border-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="mt-1 p-2 w-3/4 border rounded bg-white hover:border-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1 p-2 w-3/4 border rounded bg-white hover:border-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Are you currently working at our company?</label>
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={isWorking}
                  onChange={() => setIsWorking(true)}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="no"
                  checked={!isWorking}
                  onChange={() => setIsWorking(false)}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          {isWorking ? (
            <div>
              <div className="mb-7">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">At What Role you are??</label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="mt-1 p-2 w-full border rounded bg-white hover:border-blue-500 focus:border-blue-500 transition-colors"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="frontend">Frontend Developer</option>
                  <option value="backend">Backend Developer</option>
                  <option value="fullstack">Fullstack Developer</option>
                  <option value="devops">DevOps Engineer</option>
                  <option value="uiux">UI/UX Designer</option>
                  <option value="graphic">Graphic Designer</option>
                  <option value="quality-assurance">Quality Assurance Engineer</option>
                  <option value="software-engineer">Software Engineer</option>
                  <option value="intern">Engineering and Development Intern</option>

                </select>
              </div>

              <div className="mb-7">
                <label htmlFor="otherRole" className="block text-sm font-medium text-gray-700">Other Role (If any)</label>
                <input
                  type="text"
                  id="otherRole"
                  value={otherRole}
                  onChange={(e) => setOtherRole(e.target.value)}
                  className="mt-1 p-2 w-full border rounded bg-white hover:border-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="whatYouWantToKnow" className="block text-sm font-medium text-gray-700">What would you like to know?</label>
                <input
                  type="text"
                  id="whatYouWantToKnow"
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                  className="mt-1 p-2 w-full border rounded bg-white hover:border-blue-500 focus:border-blue-500 transition-colors"
                  required
                />
              </div>
            </div>
          )
            : (
              <div>
                <div className="mb-4">
                  <label htmlFor="internshipType" className="block text-sm font-medium text-gray-700">Are you applying for an internship?</label>
                  <select
                    id="internshipType"
                    value={internshipType}
                    onChange={(e) => setInternshipType(e.target.value)}
                    className="mt-1 p-2 w-full border rounded bg-white hover:border-blue-500 focus:border-blue-500 transition-colors"
                    required
                  >
                    <option value="">Select Internship Type</option>
                    <option value="part-time">Part-time</option>
                    <option value="full-time">Full-time</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">College Name</label>
                  <input
                    type="text"
                    id="collegeName"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    className="mt-1 p-2 w-full border rounded bg-white hover:border-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div className="mb-4 flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="admissionYear" className="block text-sm font-medium text-gray-700">Year of Admission</label>
                    <input
                      type="number"
                      id="admissionYear"
                      value={admissionYear}
                      onChange={(e) => setAdmissionYear(e.target.value)}
                      className="mt-1 p-2 w-3/4 border rounded bg-white hover:border-blue-500 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="passingYear" className="block text-sm font-medium text-gray-700">Year of Passing</label>
                    <input
                      type="number"
                      id="passingYear"
                      value={passingYear}
                      onChange={(e) => setPassingYear(e.target.value)}
                      className="mt-1 p-2 w-3/4 border rounded bg-white hover:border-blue-500 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Upload Resume</label>
                  <input
                    type="file"
                    id="resume"
                    onChange={(e) => setResume(e.target.files ? e.target.files[0] : null)}
                    className="mt-1 p-2 w-full border rounded bg-white"
                  />
                </div>

                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                    <select
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="mt-1 p-2 w-3/4 border rounded bg-white"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input
                      type="date"
                      id="dob"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="mt-1 p-2 w-3/4 border rounded bg-white"
                    />
                  </div>
                </div>

                <div className="mb-7">
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">Roles you want to apply for</label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="mt-1 p-2 w-full border rounded bg-white hover:border-blue-500 focus:border-blue-500 transition-colors"
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="fullstack">Fullstack Developer</option>
                    <option value="devops">DevOps Engineer</option>
                    <option value="uiux">UI/UX Designer</option>
                    <option value="graphic">Graphic Designer</option>
                    <option value="quality-assurance">Quality Assurance Engineer</option>
                    <option value="software-engineer">Software Engineer</option>
                    <option value="intern">Engineering and Development Intern</option>

                  </select>
                </div>

                <div className="mb-7">
                  <label htmlFor="otherRole" className="block text-sm font-medium text-gray-700">Other Role (If any)</label>
                  <input
                    type="text"
                    id="otherRole"
                    value={otherRole}
                    onChange={(e) => setOtherRole(e.target.value)}
                    className="mt-1 p-2 w-full border rounded bg-white hover:border-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="whyWantToWork" className="block text-sm font-medium text-gray-700">Why do you want to work with us?</label>
                  <textarea
                    id="whyWantToWork"
                    value={motivation}
                    onChange={(e) => setMotivation(e.target.value)}
                    className="mt-1 p-2 w-full border rounded bg-white"
                    required
                  />
                </div>
              </div>
            )}
          <div className="mt-6">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EngineeringAndDevelopmentPage;
