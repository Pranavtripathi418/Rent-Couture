import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, Form, Row } from 'react-bootstrap'
import '../styles/contact.css'
import ContactInput from '../components/ContactInput'
import { FileUpload } from '../components/FileUpload'
import { postAd } from '../redux/ads/adsSlice'
import toast from 'react-hot-toast'
import { ThreeDots } from 'react-loader-spinner'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { useLocation } from 'react-router-dom'


const PostAd = () => {
  const [value, setValue] = useState("")
  const [allValues, setAllValues] = useState({
    title: '',
    description: '',
    brand: '',
    condition: 'New',
    category: 'Mobile Phones',
    price: null,
    images: [],
  })

  const dispatch = useDispatch()
  const location = useLocation()
  const id = location.state
  const { errorMessage, successMessage, isError, isSuccess, isLoading } =
    useSelector((selector) => selector.ads)

  useEffect(() => {
    if (isError && errorMessage) {
      toast.error(errorMessage)
    }

    if (isSuccess && successMessage) {
      toast.success(successMessage)
    }
  }, [isError, isSuccess, errorMessage, successMessage, dispatch])

  const handleChange = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value })
  }
  const dropDownChange = (e) => {
    setAllValues({ ...allValues, condition: e.target.value })
  }
  const categoryDropdownChange = (e) => {
    setAllValues({ ...allValues, category: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()

    for (let i = 0; i < allValues.images.length; i++) {
      formData.append('images', allValues.images[i].file)
    }

    if (!value) {
      toast.error('Location cannot be empty')
      return
    }
    if(value){
      console.log("Location",value)
    }

    formData.append('title', allValues.title)
    formData.append('brand', allValues.brand)
    formData.append('category', allValues.category)
    formData.append('condition', allValues.condition)
    formData.append('description', allValues.description)
    formData.append('location', value && value.label)
    formData.append('price', allValues.price)

    dispatch(postAd(formData))

    setAllValues({
      title: '',
      description: '',
      brand: '',
      condition: '',
      category: 'Mobile Phones',
      price: null,
      images: [],
      location: '',
    })
  }

  if (isLoading) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ThreeDots color="#3a77ff" height={100} width={100} />
      </div>
    )
  }

  return (
    <div className="contact_page">
      <div className="cliped_bg"></div>
      <Container>
        <div className="contact_us_container">
          <h3 className="heading" style={{ color: '#fff' }}>
            POST YOUR AD
          </h3>
          <p className="description" style={{ color: '#fff' }}>
          Welcome to Rent Couture, a peer-to-peer cloth lending platform where you can rent out designer clothing or find stunning outfits for any occasion. Simply post an ad with details and photos of your clothing, and connect with others in our community. Enjoy a seamless, secure transaction process while making luxury fashion affordable and sustainable!
            <br />
            
          </p>

          <form
            className="contactform"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <Row className="g-2 gy-4">
              <ContactInput
                label="Ad title"
                placeholder="Title"
                name="title"
                handleChange={handleChange}
              />
              <ContactInput
                label="Description"
                placeholder="Add description"
                name="description"
                handleChange={handleChange}
              />
              <ContactInput
                label="Brand"
                placeholder="e.g Zara, BIBA..."
                name="brand"
                handleChange={handleChange}
              />

              <div>
                <p className="input_label">Condition</p>

                <Form.Select onChange={dropDownChange}>
                  <option value="New">New</option>
                  <option value="Open">Open</option>
                  <option value="Used">Used</option>
                </Form.Select>
              </div>

              <div>
                <p className="input_label">Categories</p>

                <Form.Select onChange={categoryDropdownChange}>
                  <option value="Sarees">Sarees</option>
                  <option value="Lehengas">Lehengas</option>
                  <option value="Men Kurtas">Men Kurtas</option>
                  <option value="Sherwanis">Sherwanis</option>
                  <option value="Men's Suits">Men's Suits</option>
                  <option value="Indo-Western Outfits">Indo-Western Outfits</option>
                  <option value="Designer Wear">Designer Wear</option>
                  <option value="Ethnic Accessories">Ethnic Accessories</option>
                  <option value="Others">Others</option>
                </Form.Select>
              </div>

              <ContactInput
                label="SET A PRICE"
                placeholder="₹"
                type="number"
                name="price"
                handleChange={handleChange}
              />

              <FileUpload allValues={allValues} setAllValues={setAllValues} />

              <div className="input-control">
                <label className="mb-2 text-uppercase">
                  Enter your location
                </label>
                <GooglePlacesAutocomplete
                  selectProps={{
                    value,
                    onChange: setValue,
    
                  }}

                  autocompletionRequest={{
                    componentRestrictions: { country: ['in'] },
                  }}
                />
              </div>
            </Row>

            <p className="agreement_heading">
              By submitting this form you agree to our terms and conditions and
              our Privacy Policy which explains how we may collect, use and
              disclose your personal information including to third parties.
            </p>

            <div>
              <Button style={{ background: '#333333' }} className='form-control' type="submit">
                Post Now
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default PostAd
