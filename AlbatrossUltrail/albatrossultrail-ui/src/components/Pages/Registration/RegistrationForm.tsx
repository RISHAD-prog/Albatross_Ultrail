import { useForm } from 'react-hook-form';
import { FaRunning, FaUser, FaIdCard, FaPhone, FaMapMarkerAlt, FaNotesMedical, FaMedal, FaUserCircle, FaLock } from 'react-icons/fa';
import { RaceCategory, RaceCategoryService } from '../../../hooks/Services/RaceCategoryService/RaceCategoryService';
import { useEffect, useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  nationality: string;
  idType: string;
  idNumber: string;
  phone: string;
  email: string;
  password: string;
  emergencyContact: string;
  emergencyPhone: string;
  address: string;
  city: string;
  country: string;
  raceCategory: string;
  tShirtSize: string;
  medicalConditions: string;
  termsAccepted: boolean;
  itraUsername: string;
  itraUserID: string;
  userPhoto: FileList | null;
};

const RegistrationForm = () => {
  const [raceCategories, setRaceCategories] = useState<RaceCategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await RaceCategoryService.getRaceCategories();
        setRaceCategories(data);
    };

    fetchCategories();
  }, []);

  
  const {
    register,
    // handleSubmit,
    formState: { errors },
    watch,
    resetField
  } = useForm<FormData>({
    defaultValues: {
      idType: 'passport',
      raceCategory: '33K',
      tShirtSize: 'M'
    }
  });

  // const raceCategories = [
  //   { value: '33K', label: '33K Trail Race (958m elevation)' },
  //   { value: '50K', label: '50K Ultra Trail (1437m elevation)' },
  //   { value: '83K', label: '83K Ultra Trail (2395m elevation)' }
  // ];

  const tShirtSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  // const onSubmit = async (data: FormData) => {
  //   const formData = new FormData();
    
  //   // Append all form data
  //   Object.entries(data).forEach(([key, value]) => {
  //     if (key === 'userPhoto' && value && value.length > 0) {
  //       formData.append(key, value[0]);
  //     } else if (value !== null && value !== undefined) {
  //       formData.append(key, String(value));
  //     }
  //   });

  //   try {
  //     const response = await fetch('/api/register', {
  //       method: 'POST',
  //       body: formData,
  //     });
  //     // Handle response
  //   } catch (error) {
  //     // Handle error
  //   }
  // };

  const handleRemovePhoto = () => {
    resetField('userPhoto');
  };

  const userPhoto = watch('userPhoto');
  const previewPhoto = userPhoto && userPhoto.length > 0 
    ? URL.createObjectURL(userPhoto[0]) 
    : null;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-primary text-white">
              <h2 className="h4 mb-0">
                <FaRunning className="me-2" />
                Albatross ULTRAIL 2025 Registration
              </h2>
            </div>

            <div className="card-body p-4 p-md-5">
            {/* onSubmit={handleSubmit(onSubmit)} */}
              <form>
                {/* Personal Information */}
                <fieldset className="mb-4">
                  <legend className="h5 text-primary border-bottom pb-2">
                    <FaUser className="me-2" />
                    Personal Information
                  </legend>
                  
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">First Name*</label>
                      <input
                        id="firstName"
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        {...register('firstName', { required: 'First name is required' })}
                      />
                      {errors.firstName && (
                        <div className="invalid-feedback">{errors.firstName.message}</div>
                      )}
                    </div>
                    
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">Last Name*</label>
                      <input
                        id="lastName"
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                        {...register('lastName', { required: 'Last name is required' })}
                      />
                      {errors.lastName && (
                        <div className="invalid-feedback">{errors.lastName.message}</div>
                      )}
                    </div>
                    
                    <div className="col-md-4">
                      <label htmlFor="gender" className="form-label">Gender*</label>
                      <select
                        id="gender"
                        className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
                        {...register('gender', { required: 'Gender is required' })}
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.gender && (
                        <div className="invalid-feedback">{errors.gender.message}</div>
                      )}
                    </div>
                    
                    <div className="col-md-4">
                      <label htmlFor="dateOfBirth" className="form-label">Date of Birth*</label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}
                        {...register('dateOfBirth', { required: 'Date of birth is required' })}
                      />
                      {errors.dateOfBirth && (
                        <div className="invalid-feedback">{errors.dateOfBirth.message}</div>
                      )}
                    </div>
                    
                    <div className="col-md-4">
                      <label htmlFor="nationality" className="form-label">Nationality*</label>
                      <input
                        id="nationality"
                        className={`form-control ${errors.nationality ? 'is-invalid' : ''}`}
                        {...register('nationality', { required: 'Nationality is required' })}
                      />
                      {errors.nationality && (
                        <div className="invalid-feedback">{errors.nationality.message}</div>
                      )}
                    </div>
                  </div>
                </fieldset>

                {/* Identification */}
                <fieldset className="mb-4">
                  <legend className="h5 text-primary border-bottom pb-2">
                    <FaIdCard className="me-2" />
                    Identification
                  </legend>
                  
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="idType" className="form-label">ID Type*</label>
                      <select
                        id="idType"
                        className={`form-select ${errors.idType ? 'is-invalid' : ''}`}
                        {...register('idType', { required: 'ID type is required' })}
                      >
                        <option value="passport">Passport</option>
                        <option value="national_id">National ID</option>
                        <option value="driving_license">Driving License</option>
                      </select>
                      {errors.idType && (
                        <div className="invalid-feedback">{errors.idType.message}</div>
                      )}
                    </div>
                    
                    <div className="col-md-6">
                      <label htmlFor="idNumber" className="form-label">ID Number*</label>
                      <input
                        id="idNumber"
                        className={`form-control ${errors.idNumber ? 'is-invalid' : ''}`}
                        {...register('idNumber', { required: 'ID number is required' })}
                      />
                      {errors.idNumber && (
                        <div className="invalid-feedback">{errors.idNumber.message}</div>
                      )}
                    </div>
                  </div>
                </fieldset>

                {/* Runner Verification */}
                <fieldset className="mb-4">
                  <legend className="h5 text-primary border-bottom pb-2">
                    <FaMedal className="me-2" />
                    Runner Verification
                  </legend>

                  <div className="row g-3">
                    {/* ITRA Username */}
                    <div className="col-md-6">
                      <label htmlFor="itraUsername" className="form-label">
                        <FaMedal className="me-2" />
                        ITRA Username (Required)
                      </label>
                      <input
                        id="itraUsername"
                        className={`form-control ${errors.itraUsername ? 'is-invalid' : ''}`}
                        {...register('itraUsername', { required: 'ITRA username is required' })}
                        placeholder="ITRA runner profile username"
                      />
                      {errors.itraUsername && (
                        <div className="invalid-feedback">{errors.itraUsername.message}</div>
                      )}
                      <small className="text-muted">
                        Helps us verify your trail running experience
                      </small>
                    </div>

                    {/* ITRA User ID */}
                    {/* <div className="col-md-4">
                      <label htmlFor="itraUserID" className="form-label">
                        <FaMedal className="me-2" />
                        ITRA UserID (Required)
                      </label>
                      <input
                        id="itraUserID"
                        className={`form-control ${errors.itraUserID ? 'is-invalid' : ''}`}
                        {...register('itraUserID', { required: 'ITRA UserID is required' })}
                        placeholder="ITRA runner profile UserId"
                      />
                      {errors.itraUserID && (
                        <div className="invalid-feedback">{errors.itraUserID.message}</div>
                      )}
                    </div> */}

                    {/* User Photo Upload */}
                    <div className="col-md-6">
                      <label className="form-label">
                        <FaUserCircle className="me-2" />
                        Runner Photo (Required)
                      </label>
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          {previewPhoto ? (
                            <img
                              src={previewPhoto}
                              alt="Preview"
                              className="rounded-circle"
                              style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                            />
                          ) : (
                            <div className="bg-light rounded-circle d-flex align-items-center justify-content-center"
                              style={{ width: '60px', height: '60px' }}>
                              <FaUserCircle size={24} className="text-secondary" />
                            </div>
                          )}
                        </div>
                        <div>
                          <input
                            type="file"
                            id="userPhoto"
                            className="d-none"
                            accept="image/*"
                            {...register('userPhoto', { 
                              required: 'Runner photo is required',
                              validate: {
                                fileSize: files => 
                                  !files || files[0]?.size <= 2 * 1024 * 1024 || 'Max file size is 2MB',
                                fileType: files => 
                                  !files || ['image/jpeg', 'image/png'].includes(files[0]?.type) || 
                                  'Only JPEG/PNG images allowed'
                              }
                            })}
                          />
                          <label htmlFor="userPhoto" className="btn btn-sm btn-outline-primary me-2">
                            {userPhoto?.length ? 'Change' : 'Upload'}
                          </label>
                          {userPhoto?.length && (
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger"
                              onClick={handleRemovePhoto}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                      {errors.userPhoto && (
                        <small className="text-danger d-block mt-1">{errors.userPhoto.message}</small>
                      )}
                      <small className="text-muted d-block mt-1">
                        Clear face photo for bib identification (JPEG/PNG, max 2MB)
                      </small>
                    </div>
                  </div>
                </fieldset>

                {/* Contact Information */}
                <fieldset className="mb-4">
                  <legend className="h5 text-primary border-bottom pb-2">
                    <FaPhone className="me-2" />
                    Contact Information
                  </legend>
                  
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">Phone Number*</label>
                      <input
                        type="tel"
                        id="phone"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        {...register('phone', { 
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/,
                            message: 'Invalid phone number format'
                          }
                        })}
                      />
                      {errors.phone && (
                        <div className="invalid-feedback">{errors.phone.message}</div>
                      )}
                    </div>
                    
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Email*</label>
                      <input
                        type="email"
                        id="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email.message}</div>
                      )}
                    </div>

                    {/* Password Field */}
                    <div className="col-md-6">
                      <label htmlFor="password" className="form-label">
                        <FaLock className="me-2" />
                        Password*
                      </label>
                      <input
                        type="password"
                        id="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        {...register('password', { 
                          required: 'Password is required',
                          minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters'
                          },
                          pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                            message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number'
                          }
                        })}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">{errors.password.message}</div>
                      )}
                    </div>
                    
                    <div className="col-md-6">
                      <label htmlFor="emergencyContact" className="form-label">Emergency Contact Name*</label>
                      <input
                        id="emergencyContact"
                        className={`form-control ${errors.emergencyContact ? 'is-invalid' : ''}`}
                        {...register('emergencyContact', { required: 'Emergency contact is required' })}
                      />
                      {errors.emergencyContact && (
                        <div className="invalid-feedback">{errors.emergencyContact.message}</div>
                      )}
                    </div>
                    
                    <div className="col-md-6">
                      <label htmlFor="emergencyPhone" className="form-label">Emergency Contact Phone*</label>
                      <input
                        type="tel"
                        id="emergencyPhone"
                        className={`form-control ${errors.emergencyPhone ? 'is-invalid' : ''}`}
                        {...register('emergencyPhone', { 
                          required: 'Emergency phone is required',
                          pattern: {
                            value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/,
                            message: 'Invalid phone number format'
                          }
                        })}
                      />
                      {errors.emergencyPhone && (
                        <div className="invalid-feedback">{errors.emergencyPhone.message}</div>
                      )}
                    </div>
                  </div>
                </fieldset>

                {/* Address */}
                <fieldset className="mb-4">
                  <legend className="h5 text-primary border-bottom pb-2">
                    <FaMapMarkerAlt className="me-2" />
                    Address
                  </legend>
                  
                  <div className="row g-3">
                    <div className="col-12">
                      <label htmlFor="address" className="form-label">Street Address*</label>
                      <input
                        id="address"
                        className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                        {...register('address', { required: 'Address is required' })}
                      />
                      {errors.address && (
                        <div className="invalid-feedback">{errors.address.message}</div>
                      )}
                    </div>
                    
                    <div className="col-md-6">
                      <label htmlFor="city" className="form-label">City*</label>
                      <input
                        id="city"
                        className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                        {...register('city', { required: 'City is required' })}
                      />
                      {errors.city && (
                        <div className="invalid-feedback">{errors.city.message}</div>
                      )}
                    </div>
                    
                    <div className="col-md-6">
                      <label htmlFor="country" className="form-label">Country*</label>
                      <input
                        id="country"
                        className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                        {...register('country', { required: 'Country is required' })}
                      />
                      {errors.country && (
                        <div className="invalid-feedback">{errors.country.message}</div>
                      )}
                    </div>
                  </div>
                </fieldset>

                {/* Race Information */}
                <fieldset className="mb-4">
                  <legend className="h5 text-primary border-bottom pb-2">
                    <FaRunning className="me-2" />
                    Race Information
                  </legend>
                  
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="raceCategory" className="form-label">Race Category*</label>
                      <select
                        id="raceCategory"
                        className={`form-select ${errors.raceCategory ? 'is-invalid' : ''}`}
                        {...register('raceCategory', { required: 'Race category is required' })}
                      >
                        {raceCategories.map(category => (
                          <option key={category.CategoryName} value={category.CategoryName}>
                            {category.Label}
                          </option>
                        ))}
                      </select>
                      {errors.raceCategory && (
                        <div className="invalid-feedback">{errors.raceCategory.message}</div>
                      )}
                    </div>
                    
                    <div className="col-md-6">
                      <label htmlFor="tShirtSize" className="form-label">T-Shirt Size*</label>
                      <select
                        id="tShirtSize"
                        className={`form-select ${errors.tShirtSize ? 'is-invalid' : ''}`}
                        {...register('tShirtSize', { required: 'T-shirt size is required' })}
                      >
                        {tShirtSizes.map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                      {errors.tShirtSize && (
                        <div className="invalid-feedback">{errors.tShirtSize.message}</div>
                      )}
                    </div>
                    
                    <div className="col-12">
                      <label htmlFor="medicalConditions" className="form-label">
                        <FaNotesMedical className="me-2" />
                        Medical Conditions/Allergies
                      </label>
                      <textarea
                        id="medicalConditions"
                        className="form-control"
                        {...register('medicalConditions')}
                        rows={3}
                        placeholder="Please disclose any medical conditions or allergies that organizers should be aware of"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Terms and Conditions */}
                <div className="mb-4 form-check">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    className={`form-check-input ${errors.termsAccepted ? 'is-invalid' : ''}`}
                    {...register('termsAccepted', { 
                      required: 'You must accept the terms and conditions' 
                    })}
                  />
                  <label htmlFor="termsAccepted" className="form-check-label">
                    I agree to the <a href="/terms" target="_blank">Terms and Conditions</a> and confirm that I meet the eligibility requirements for my selected race category*
                  </label>
                  {errors.termsAccepted && (
                    <div className="invalid-feedback">{errors.termsAccepted.message}</div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Complete Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
