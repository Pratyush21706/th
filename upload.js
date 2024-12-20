const firebaseConfig = {
    apiKey: "AIzaSyCaV_ijJ0vCrjkE-wkxVeihzoe-oWTXHZE",
    authDomain: "memu-website.firebaseapp.com",
    projectId: "memu-website",
    storageBucket: "memu-website.firebasestorage.app",
    messagingSenderId: "1030671738904",
    appId: "1:1030671738904:web:cbb7779637541023a2bb6d"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  
  // Reference to the form and spinner
  const form = document.getElementById('ppioForm');
  const spinner = document.createElement('div');
  spinner.className = 'spinner-border text-primary';
  spinner.role = 'status';
  spinner.style.position = 'fixed';
  spinner.style.top = '50%';
  spinner.style.left = '50%';
  spinner.style.transform = 'translate(-50%, -50%)';
  spinner.innerHTML = '<span class="visually-hidden">Uploading...</span>';
  
  document.body.appendChild(spinner);
  spinner.style.display = 'none'; // Hide spinner initially
  
  // Function to store data
  const storeData = async (ppio1Url, ppio2Url) => {
    const today = new Date().toISOString().split('T')[0]; // Standardized date format
    const dataRef = db.ref(`PPIOData/${today}`);
  
    // Check if data already exists
    const snapshot = await dataRef.get();
    if (snapshot.exists()) {
      const overwrite = confirm("Data for today already exists. Do you want to overwrite it?");
      if (!overwrite) {
        return { success: false, message: "User canceled overwrite." };
      }
    }
  
    // Store the data
    await dataRef.set({
      PPIO1: ppio1Url,
      PPIO2: ppio2Url,
      timestamp: new Date().toISOString() // Standardized timestamp
    });
  
    return { success: true, message: "Data stored successfully!" };
  };
  
  // Event listener for form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const ppio1Url = document.getElementById('ppio1').value;
    const ppio2Url = document.getElementById('ppio2').value;
  
    // Show spinner
    spinner.style.display = 'block';
  
    try {
      const result = await storeData(ppio1Url, ppio2Url);
      if (result.success) {
        alert(result.message);
        form.reset(); // Clear form on success
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error storing data:', error);
      alert('Failed to upload data. Please try again.');
    } finally {
      // Hide spinner
      spinner.style.display = 'none';
    }
  });