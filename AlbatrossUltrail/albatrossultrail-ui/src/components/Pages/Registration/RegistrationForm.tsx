import { useForm } from 'react-hook-form';
import { FaRunning, FaUser, FaIdCard, FaPhone, FaMapMarkerAlt, FaMedal, FaUserCircle, FaLock } from 'react-icons/fa';
import { RaceCategory, RaceCategoryService } from '../../../hooks/Services/RaceCategoryService/RaceCategoryService';
import { useEffect, useState } from 'react';
import Registration from '../../../hooks/Services/Registration/Registration';

type FormData = {
  FirstName: string;
  LastName: string;
  Gender: string;
  DOB: Date;
  Nationality: string;
  IdentifyType: string;
  IdentificationNum: number;
  Phone: number;
  Email: string;
  Password: string;
  Address: string;
  City: string;
  Country: string;
  RaceCategoryID: number;
  TShirtSize: string;
  Comments: string;
  ITRAUserName: string;
  UserPhoto: any;
};

const RegistrationForm = () => {
  const [raceCategories, setRaceCategories] = useState<RaceCategory[]>([]);
  const [PasswordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await RaceCategoryService.getRaceCategories();
      setRaceCategories(data);
    };

    fetchCategories();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    resetField
  } = useForm<FormData>({
    defaultValues: {
      IdentifyType: 'passport',
      RaceCategoryID: 4,
      TShirtSize: 'm'
    }
  });

  const TShirtSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const onSubmit = async (data: FormData) => {
    let formData = new FormData();

    // Append all form data

    // Required fields
    formData.append('FirstName', data.FirstName);
    formData.append('LastName', data.LastName);
    formData.append('Gender', data.Gender);

    // Handle Date conversion
    const dob = typeof data.DOB === 'string' ? data.DOB : data.DOB.toISOString();
    formData.append('DOB', dob);

    formData.append('Nationality', data.Nationality);
    formData.append('IdentifyType', data.IdentifyType);
    formData.append('IdentificationNum', String(data.IdentificationNum));
    formData.append('Phone', String(data.Phone));
    formData.append('Email', data.Email);
    formData.append('Password', data.Password);
    formData.append('Address', data.Address);
    formData.append('City', data.City);
    formData.append('Country', data.Country);
    formData.append('RaceCategoryID', String(data.RaceCategoryID));
    formData.append('TShirtSize', data.TShirtSize);
    formData.append('UserPhoto', String(previewPhoto));

    // Optional fields
    if (data.Comments) formData.append('Comments', data.Comments);
    if (data.ITRAUserName) formData.append('ITRAUserName', data.ITRAUserName);

    // Handle file upload
    // if (data.UserPhoto) {
    //   if (data.UserPhoto instanceof FileList && data.UserPhoto.length > 0) {
    //     formData.append('UserPhoto', data.UserPhoto[0]);
    //   } else if (data.UserPhoto instanceof File) {
    //     formData.append('UserPhoto', data.UserPhoto);
    //   }
    // }


    try {
      const response = await Registration.save(formData);
      if(response.status === 200) {
        alert('Registration successful!');
        resetField('FirstName');
        resetField('LastName');
        resetField('Gender');
        resetField('DOB');
        resetField('Nationality');
        resetField('IdentifyType');
        resetField('IdentificationNum');
        resetField('Phone');
        resetField('Email');
        resetField('Password');
        resetField('Address');
        resetField('City');
        resetField('Country');
        resetField('RaceCategoryID');
        resetField('TShirtSize');
        resetField('Comments');
        resetField('ITRAUserName');
        resetField('UserPhoto');

        window.location.href = '/login';
      }
      return response;
      // Handle response
    } catch (error) {
      // Handle error
    }
  };

  // const handleRemovePhoto = () => {
  //   resetField('UserPhoto');
  // };

  // const UserPhoto = watch('UserPhoto');
  // const previewPhoto = UserPhoto && UserPhoto.length > 0
  //   ? URL.createObjectURL(UserPhoto[0])
  //   : null;

  //   try {
  //     const response= await Registration.save(data);
  //     return response;
  //     // Handle response
  //   } catch (error) {
  //     // Handle error
  //   }
  // };

  const handleRemovePhoto = () => {
    resetField('UserPhoto');
  };

  const UserPhoto = watch('UserPhoto');
  const previewPhoto = UserPhoto && UserPhoto.length > 0
    ? URL.createObjectURL(UserPhoto[0])
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
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Personal Information */}
                <fieldset className="mb-4">
                  <legend className="h5 text-primary border-bottom pb-2">
                    <FaUser className="me-2" />
                    Personal Information
                  </legend>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="FirstName" className="form-label">First Name*</label>
                      <input
                        id="FirstName"
                        className={`form-control ${errors.FirstName ? 'is-invalid' : ''}`}
                        {...register('FirstName', { required: 'First name is required' })}
                      />
                      {errors.FirstName && (
                        <div className="invalid-feedback">{errors.FirstName.message}</div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="LastName" className="form-label">Last Name*</label>
                      <input
                        id="LastName"
                        className={`form-control ${errors.LastName ? 'is-invalid' : ''}`}
                        {...register('LastName', { required: 'Last name is required' })}
                      />
                      {errors.LastName && (
                        <div className="invalid-feedback">{errors.LastName.message}</div>
                      )}
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="Gender" className="form-label">Gender*</label>
                      <select
                        id="Gender"
                        className={`form-select ${errors.Gender ? 'is-invalid' : ''}`}
                        {...register('Gender', { required: 'Gender is required' })}
                      >
                        <option value="">Select</option>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                        <option value="o">Other</option>
                      </select>
                      {errors.Gender && (
                        <div className="invalid-feedback">{errors.Gender.message}</div>
                      )}
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="DOB" className="form-label">Date of Birth*</label>
                      <input
                        type="date"
                        id="DOB"
                        className={`form-control ${errors.DOB ? 'is-invalid' : ''}`}
                        {...register('DOB', { required: 'Date of birth is required' })}
                      />
                      {errors.DOB && (
                        <div className="invalid-feedback">{errors.DOB.message}</div>
                      )}
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="Nationality" className="form-label">Nationality*</label>
                      <input
                        id="Nationality"
                        className={`form-control ${errors.Nationality ? 'is-invalid' : ''}`}
                        {...register('Nationality', { required: 'Nationality is required' })}
                      />
                      {errors.Nationality && (
                        <div className="invalid-feedback">{errors.Nationality.message}</div>
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
                      <label htmlFor="IdentifyType" className="form-label">ID Type*</label>
                      <select
                        id="IdentifyType"
                        className={`form-select ${errors.IdentifyType ? 'is-invalid' : ''}`}
                        {...register('IdentifyType', { required: 'ID type is required' })}
                      >
                        <option value="passport">Passport</option>
                        <option value="national_id">National ID</option>
                        <option value="driving_license">Driving License</option>
                      </select>
                      {errors.IdentifyType && (
                        <div className="invalid-feedback">{errors.IdentifyType.message}</div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="IdentificationNum" className="form-label">ID Number*</label>
                      <input
                        type='number'
                        id="IdentificationNum"
                        className={`form-control ${errors.IdentificationNum ? 'is-invalid' : ''}`}
                        {...register('IdentificationNum', { required: 'ID number is required' })}
                      />
                      {errors.IdentificationNum && (
                        <div className="invalid-feedback">{errors.IdentificationNum.message}</div>
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
                      <label htmlFor="ITRAUserName" className="form-label">
                        <FaMedal className="me-2" />
                        ITRA Username (Required)
                      </label>
                      <input
                        id="ITRAUserName"
                        className={`form-control ${errors.ITRAUserName ? 'is-invalid' : ''}`}
                        {...register('ITRAUserName', { required: 'ITRA username is required' })}
                        placeholder="ITRA runner profile username"
                      />
                      {errors.ITRAUserName && (
                        <div className="invalid-feedback">{errors.ITRAUserName.message}</div>
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
                            id="UserPhoto"
                            className="d-none"
                            accept="image/*"
                            {...register('UserPhoto', {
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
                          <label htmlFor="UserPhoto" className="btn btn-sm btn-outline-primary me-2">
                            {UserPhoto?.length ? 'Change' : 'Upload'}
                          </label>
                          {UserPhoto?.length && (
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
                      {errors.UserPhoto && (
                        <small className="text-danger d-block mt-1">{String(errors.UserPhoto.message)}</small>
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
                      <label htmlFor="Phone" className="form-label">Phone Number*</label>
                      <input
                        type="number"
                        id="Phone"
                        className={`form-control ${errors.Phone ? 'is-invalid' : ''}`}
                        {...register('Phone', {
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/,
                            message: 'Invalid Phone number format'
                          }
                        })}
                      />
                      {errors.Phone && (
                        <div className="invalid-feedback">{errors.Phone.message}</div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="Email" className="form-label">Email*</label>
                      <input
                        type="Email"
                        id="Email"
                        className={`form-control ${errors.Email ? 'is-invalid' : ''}`}
                        {...register('Email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid Email Address'
                          }
                        })}
                      />
                      {errors.Email && (
                        <div className="invalid-feedback">{errors.Email.message}</div>
                      )}
                    </div>

                    {/* Password Field */}
                    <div className="col-md-6">
                      <label htmlFor="Password" className="form-label">
                        <FaLock className="me-2" />
                        Password*
                      </label>
                      <input
                        type={PasswordVisible ? 'text' : 'Password'}
                        id="Password"
                        placeholder="Enter your Password"
                        {...register("Password", {
                          required: "Password field is required",
                          minLength: {
                            value: 5,
                            message: "Password must be at least 5 characters long"
                          },
                          pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/,
                            message: "Password must contain at least one uppercase letter, one lowercase letter, and one special character"
                          }
                        })}
                        className={`form-control ${errors.Password ? 'is-invalid' : ''}`}
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary mt-2"
                        onClick={() => setPasswordVisible(!PasswordVisible)}
                      >
                        {PasswordVisible ? 'Hide' : 'Show'}
                      </button>
                    </div>

                    {/* <div className="col-md-6">
                      <label htmlFor="emergencyContact" className="form-label">Emergency Contact Name*</label>
                      <input
                        id="emergencyContact"
                        className={`form-control ${errors.emergencyContact ? 'is-invalid' : ''}`}
                        {...register('emergencyContact', { required: 'Emergency contact is required' })}
                      />
                      {errors.emergencyContact && (
                        <div className="invalid-feedback">{errors.emergencyContact.message}</div>
                      )}
                    </div> */}

                    {/* <div className="col-md-6">
                      <label htmlFor="emergencyPhone" className="form-label">Emergency Contact Phone*</label>
                      <input
                        type="tel"
                        id="emergencyPhone"
                        className={`form-control ${errors.emergencyPhone ? 'is-invalid' : ''}`}
                        {...register('emergencyPhone', { 
                          required: 'Emergency Phone is required',
                          pattern: {
                            value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/,
                            message: 'Invalid Phone number format'
                          }
                        })}
                      />
                      {errors.emergencyPhone && (
                        <div className="invalid-feedback">{errors.emergencyPhone.message}</div>
                      )}
                    </div> */}
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
                      <label htmlFor="Address" className="form-label">Street Address*</label>
                      <input
                        id="Address"
                        className={`form-control ${errors.Address ? 'is-invalid' : ''}`}
                        {...register('Address', { required: 'Address is required' })}
                      />
                      {errors.Address && (
                        <div className="invalid-feedback">{errors.Address.message}</div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="City" className="form-label">City*</label>
                      <input
                        id="City"
                        className={`form-control ${errors.City ? 'is-invalid' : ''}`}
                        {...register('City', { required: 'City is required' })}
                      />
                      {errors.City && (
                        <div className="invalid-feedback">{errors.City.message}</div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="Country" className="form-label">Country*</label>
                      <input
                        id="Country"
                        className={`form-control ${errors.Country ? 'is-invalid' : ''}`}
                        {...register('Country', { required: 'Country is required' })}
                      />
                      {errors.Country && (
                        <div className="invalid-feedback">{errors.Country.message}</div>
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
                      <label htmlFor="RaceCategoryID" className="form-label">Race Category*</label>
                      <select
                        id="RaceCategoryID"
                        className={`form-select ${errors.RaceCategoryID ? 'is-invalid' : ''}`}
                        {...register('RaceCategoryID', { required: 'Race category is required' })}
                      >
                        {raceCategories.map(category => (
                          <option key={category.CategoryName} value={category.ID}>
                            {category.Label}
                          </option>
                        ))}
                      </select>
                      {errors.RaceCategoryID && (
                        <div className="invalid-feedback">{errors.RaceCategoryID.message}</div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="TShirtSize" className="form-label">T-Shirt Size*</label>
                      <select
                        id="TShirtSize"
                        className={`form-select ${errors.TShirtSize ? 'is-invalid' : ''}`}
                        {...register('TShirtSize', { required: 'T-shirt size is required' })}
                      >
                        {TShirtSizes.map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                      {errors.TShirtSize && (
                        <div className="invalid-feedback">{errors.TShirtSize.message}</div>
                      )}
                    </div>

                    <div className="col-12">
                      <label htmlFor="Comments" className="form-label">
                        <FaRunning className="me-2" />
                        Any Comments or Discussions you want to share with us?
                      </label>
                      <textarea
                        id="Comments"
                        className="form-control"
                        {...register('Comments')}
                        rows={3}
                        placeholder="Please share any comments or discussions you want to share with us"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Terms and Conditions */}
                {/* <div className="mb-4 form-check">
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
                </div> */}

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
