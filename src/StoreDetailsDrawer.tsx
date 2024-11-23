import React from "react";
import {
  Box,
  Drawer,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

interface StoreDetailsDrawerProps {
  open: boolean;
  onClose: () => void;
  data: any;
  isFarmersMarket: boolean;
}


const StoreDetailsDrawer: React.FC<StoreDetailsDrawerProps> = ({ open, onClose, data, isFarmersMarket }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        p={3}
        width="350px"
        sx={{
            bgcolor: "#f5f5f5", 
            color: "#333", 
            borderLeft: "5px solid #000000", 
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.5)", 
        }}
      >
        {/* Title */}
        <Typography
  variant="h4"
  sx={{
    fontFamily: '"Poppins", sans-serif', 
    fontWeight: 600, 
    color: "#333333", 
    mb: 2, 
  }}
>
  Store Details
</Typography>

        <Divider sx={{ mb: 2 }} />

        {/* Store Name */}
        <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold", color: "#333" }}>
          {isFarmersMarket ? data.listing_name : data.type}
        </Typography>

        {/* Address Information */}
        <Typography variant="body1" sx={{ mb: 1, color: "#424242" }}>
          {isFarmersMarket ? data.location_street : data.street_address}
          <br />
          {isFarmersMarket ? data.location_city : data.city}, {isFarmersMarket ? data.location_state : data.state}
          <br />
          {isFarmersMarket ? data.location_zipcode : data.zip}
        </Typography>

        {/* Contact Information */}
        <Typography variant="body2" sx={{ color: "#545454", mb: 2 }}>
          {isFarmersMarket ? data.contact_phone : data.phone_number}
        </Typography>

        {/* Directions*/}
          <Button
          variant="outlined"
          href={isFarmersMarket ? "https://www.google.com/maps/place/" + data.location_y + "," + data.location_x : "https://www.google.com/maps/place/" + data.latitude + "," + data.longitude}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            mb: 2,
            borderColor: "#080808", 
            color: "#080808", 
            backgroundColor: "#FFFFFF", 
            padding: "8px 20px", 
            //borderRadius: "8px", 
            fontWeight: "500", 
            
            transition: "all 0.3s ease", 
            "&:hover": {
              backgroundColor: "#080808", 
              color: "#ffffff", 
              borderColor: "080808", 
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)", 
            },
            "&:active": {
              transform: "scale(0.98)", 
            },
          }}
        >
          Map Directions
        </Button>
        

        {/* Website Link */}
        {data.website && (
          <Button
          variant="outlined"
          href={isFarmersMarket ? data.media_website : data.website}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            mb: 2,
            borderColor: "#080808", 
            color: "#080808", 
            backgroundColor: "#FFFFFF", 
            padding: "8px 20px", 
            //borderRadius: "8px", 
            fontWeight: "500", 
            
            transition: "all 0.3s ease", 
            "&:hover": {
              backgroundColor: "#080808", 
              color: "#ffffff", 
              borderColor: "080808", 
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)", 
            },
            "&:active": {
              transform: "scale(0.98)", 
            },
          }}
        >
          Visit Website
        </Button>
        
        )}

        {/* Store Image */}
        {!isFarmersMarket && data.image_url && (
          <Box
            component="img"
            src={data.image_url}
            alt="Store"
            sx={{
              width: "70%",
              borderRadius: "8px",
              mb: 2,
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        )}

        {/* Operating Hours */}
        {!isFarmersMarket && data.hours && (
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#333" }}>
              Hours
            </Typography>
            <List>
              {Object.keys(JSON.parse(data.hours)).map((day) => {
                const hours = JSON.parse(data.hours)[day];
                return (
                  <ListItem key={day} sx={{ p: 0 }}>
                    <ListItemText
                      primary={`${day}:`}
                      secondary={`${hours.open} - ${hours.close}`}
                      primaryTypographyProps={{ variant: "body2", fontWeight: "bold", color: "#333" }}
                      secondaryTypographyProps={{ variant: "body2", color: "text.secondary" }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Box>
        )}

         {/*last_updated*/}
         <Typography variant="body2" sx={{ color: "#545454", mb: 2 }}>
          {"Last updated: "}
          {isFarmersMarket || !data.last_updated ? "unknown" : data.last_updated.slice(5,10) + "-" + data.last_updated.slice(0,4)}
        </Typography>

        {/* Fallback Text */}
        {isFarmersMarket && (
          <Typography variant="body2" sx={{ mt: 2, color: "#888" }}>
            Please call for market hours.
          </Typography>
        )}
      </Box>
    </Drawer>
  );
};

export default StoreDetailsDrawer;


