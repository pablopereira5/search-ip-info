const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '418dd096f5msh098481b70b97e23p1c7b41jsn9bf2d26be7e4',
		'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
	}
};

const fetchIpInfo = ip =>{
	return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`)
	.then(res => res.json())
	.catch(err => console.error(err))
}

const $form = document.querySelector('#form')

const $input = document.querySelector('#input')

const $submit = document.querySelector('#submit')

$form.addEventListener('submit', async (event) =>{
	event.preventDefault()
	const {value} = $input
	if(!value) return

	$submit.setAttribute('disabled', '')
	$submit.setAttribute('aria-busy', 'true')
	
	const ipInfo=  await fetchIpInfo(value)

	$submit.removeAttribute('disabled')
	$submit.removeAttribute('aria-busy')
})
