import React from 'react';

import './App.css';
function App() {

    return (
        <div className="App">
            <div className="navbar">  
                <a className="active" href="#home">Home</a> 
                <a href="#projects">Projects</a> 
                <a href="#contact">Contact</a> 
                <a href="#resume">Resume</a>

                <div className="Title">
                    <ResumeTitle name="David White" number="919-624-3650" email="david12white@gmail.com" />
                </div>
            </div>
            <div className="Introduction">
                <img src="https://resume-storage-de3xugktgfazx32554-staging.s3.amazonaws.com/public/License.jpg?AWSAccessKeyId=ASIAZYDJDNYNOHEPEKPZ&Expires=1641944179&Signature=4g5SoGEVaaQkDg7dhkzJ2keyeLs%3D&x-amz-security-token=IQoJb3JpZ2luX2VjECAaCXVzLWVhc3QtMSJIMEYCIQDA8tkBysURVHobW%2Fmi9zXXOJsnZGB1Oe0yKyubxBGlvQIhAONHOZyfT4RbpI7O2aUwl6DjcBfnm%2BH%2B2rC5JRiJpjLuKsQECDkQABoMNjcwMjM1MzIzOTMwIgzMwAttP0Q0UmlwNRQqoQR0IxbmQBTk3iSeIGMsjB9DMLYb7MZ5H3jBlY09nCuPwI9PjHuQuJHVDd%2FV4KE8FshOQ6K02efgLwk9qOsuEC5tYdHo%2FdP%2BCQh5ESlarSokEMuq2QtitZfy1iEfNhwWdujYr42CKyR6zQRo2XtjdJFqwdSISp1xIvGEP6z5EOlXkesXsqBSqDabhEtC7G8XNhQBdHS84zkQSijTRNIZNIvekKCND9cyktlUxsDre8sh1Az42BMjV80mfK7saFq1%2BdGyRWU%2BGiAoVfETBIjMNzNai2v6zTq9WPl6mjM3n4Jk%2FVv1E8F0cH9%2Bv6dmqaZcU1KViolLOxSyBRtk%2F%2BRAuDH6FPq9wKcm39tTJDRmUAXKsYZWCsZd9EWOPkg%2BZCeBcrgXhbJJhb0fGrd6L72uhYg6Z%2FRgLpxbzyTQDt%2FVrz1b43T68tsSwCdCYRHmqiJnn6EXRQF2kQeuBjOZktqwJ1EWsNbc4DtcljOodmJlMPdm4sGYMf9t%2BTJuJKfzPSRBGMNmU%2FxKdnEd90QQbZXRdMzdCIBeCJtZu0pEuIWVg38GuCr5Yw8AybeTNWPmfms74Co7ot0MEFKYzDwGPnshUjiQVbzYIWGE9P72bJ5Ye2RegsviNGacqCBPUDHtIxlGYZ19xQFapFtMlofV2rUTaf8xCiV3Atsjvhloo3Y2xUJUUsqpVVPBoymOYaTfqbwuAUbPCVP4HOHInlY1lm0LUQDU1TCopviOBjqEAqLJIWJm7Ubi2cZYD4h%2FggXctCpdz53GNYxuPiGQBzsj0PprS6DmnYVGY5IM7gYXql5yf%2BK5O6Y982Wn2FDh69FS4mMBJFDaPIhJyg0lnuDGoC149UF5uMSES0XYx0V%2BepMEDQl2WTHhtt2NZuQ8AUDKEBgzPXbs50gratFy7a0n1UODmDWE4k0Rm9HKVOadxKiM91jcC%2FGiU6Y69W8U9Yspu6eas9MZUWw0aikMuAvVlgtJyhVhGVC7YVGI9yL7g3%2BHEkFU0%2BINMjC1SFoFkfJkaEVP%2BFM57H%2FgG4c0uCAZvQNysNvmIPnksVDFkK4CQHYD0tn4jlEVtNGEiTKv9OBwjE9l"alt="Me" />
            </div>

            <div className="Statistics">
                <div className="StatisticsLeft">
                <h1> 4.0 </h1>
                    <h4> Cumulative GPA </h4>
                </div>
                <div className="StatisticsRight">
                    <h1> 74 </h1>
                    <h4> Credit Hours </h4>
                    </div>
            </div>
        </div>
    );
}
class ResumeTitle extends React.Component {
    render() {
        return (
            <header>
                <h1>{this.props.name} | {this.props.number} | {this.props.email} </h1>
            </header>
        );
    }
}

export default App;