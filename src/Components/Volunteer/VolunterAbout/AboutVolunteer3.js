import "./volunterAbout.css"
function VolunterPerson3(){
    return(
        <div style={{marginTop:"80px"}}>
        <div>
            <img src="https://gramentheme.com/html/sadaka/assets/images/banner/banner-inner-page.jpg" alt="volunteer landscape" width="1200vw" height="300vh"/>
        </div>
        <div className="aboutContainer">
            <div>
                <img className="imagecon" src="https://img.freepik.com/free-photo/female-volunteer-holding-box-donations_23-2147807294.jpg?t=st=1714023164~exp=1714026764~hmac=fde8b495039cf240b071ec4c69505728570bdad6fe2ca280d0c8fdeceecf30d2&w=360" alt="volunteerimage"/>
            </div>
            <div className="detailsContainer">
                <h1 className="heading">Name</h1>
                <h4 className="Role">Role(Project Manager)</h4>
                <hr/>
                <div>
                <h1 className="Aboutheading">About Me</h1>
                <p className="Desc">This good man possesses qualities that inspire us all. He is selfless, always putting the needs of others before his own. Whether it's helping a neighbor in distress, volunteering at local charities, or simply lending a listening ear to those who need it, he consistently demonstrates the true meaning of altruism</p>
            </div>
            </div>
        </div>
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexDirection:"column",marginLeft:"40px"}}>
            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexDirection:"column"}}>
            <h1 className="Aboutheading">Educational Background</h1>
            <h3 className="Role">Bachelor's Degree, 2010</h3>
            <p className="Desc">Proin ultricies ultricies est vitae cursus. Nulla sit amet suscipit tortor. Maecenas dui erat, ornare eget tristique vitae, rutrum pretium justo. Phasellus vitae consequat nisi, quis luctus nisl. Praesent faucibus sem id massa semper ornare. Nam eu magna at mi pellentesque mattis. Morbi at condimentum velit. Phasellus aliquet, leo auctor volutpat ultrices, metus dolor dictum enim, sed convallis lacus urna nec erat.</p>
            </div>

            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexDirection:"column"}}>
            <h1 className="Aboutheading">Educational Background</h1>
            <h3 className="Role">Bachelor's Degree, 2010</h3>
            <p className="Desc">Proin ultricies ultricies est vitae cursus. Nulla sit amet suscipit tortor. Maecenas dui erat, ornare eget tristique vitae, rutrum pretium justo. Phasellus vitae consequat nisi, quis luctus nisl. Praesent faucibus sem id massa semper ornare. Nam eu magna at mi pellentesque mattis. Morbi at condimentum velit. Phasellus aliquet, leo auctor volutpat ultrices, metus dolor dictum enim, sed convallis lacus urna nec erat.</p>
            </div>
        </div>
    </div>
    )
}
export default VolunterPerson3;