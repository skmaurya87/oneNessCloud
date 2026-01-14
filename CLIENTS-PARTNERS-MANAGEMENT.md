# Clients and Partners Management

This document explains how to manage the clients and partners data displayed on the website.

## Configuration File

All clients and partners data is stored in a single JSON configuration file:
```
src/assets/clients-partners.json
```

## Data Structure

The JSON file contains two main arrays:

### Clients Array
Each client object has the following structure:
```json
{
  "id": "unique-identifier",
  "name": "Display Name",
  "logo": "filename.png"
}
```

### Partners Array
Each partner object has the following structure:
```json
{
  "id": "unique-identifier", 
  "name": "Display Name",
  "logo": "filename.png"
}
```

## Image Assets

- Client logos should be placed in: `src/assets/images/clients/`
- Partner logos should be placed in: `src/assets/images/partners/`
- Supported formats: PNG, JPG, SVG
- Recommended dimensions: 200x100px (or maintain aspect ratio)

## How to Add/Remove/Update

### Adding a New Client
1. Add the logo image to `src/assets/images/clients/`
2. Add a new object to the `clients` array in `clients-partners.json`:
```json
{
  "id": "new-client",
  "name": "New Client Name",
  "logo": "new-client-logo.png"
}
```

### Adding a New Partner
1. Add the logo image to `src/assets/images/partners/`
2. Add a new object to the `partners` array in `clients-partners.json`:
```json
{
  "id": "new-partner",
  "name": "New Partner Name", 
  "logo": "new-partner-logo.png"
}
```

### Removing a Client/Partner
Simply remove the corresponding object from the respective array in the JSON file.

### Updating Display Name
Change the `name` property in the JSON file.

### Updating Logo
1. Replace the image file in the appropriate folder
2. Update the `logo` property if the filename changed

## Important Notes

- **No code changes required**: All updates can be done by modifying the JSON file only
- **Automatic synchronization**: Both sections will automatically reflect changes when the JSON file is updated
- **Error handling**: The application gracefully handles missing images or data
- **Loading states**: Users see loading indicators while data is being fetched
- **Performance**: Data is cached to minimize HTTP requests

## Development

The application uses Angular's `CommonService` to fetch and manage this data:
- `getClients()`: Returns only client data
- `getPartners()`: Returns only partner data  
- `getClientsAndPartners()`: Returns both clients and partners data

Components automatically subscribe to data changes and update the UI accordingly.