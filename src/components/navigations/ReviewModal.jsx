import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Alert,
  CircularProgress,
} from "@mui/material";
import { usePublicStore } from "../../store/publicStore";

const initialState = {
  clientName: "",
  comment: "",
};

const titleSx = {
  fontFamily: "'Nanum Myeongjo', serif",
  fontWeight: 600,
  fontSize: "clamp(20px, 2vw, 24px)",
  textTransform: "uppercase",
  color: "#282828",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "2px solid #282828",
  paddingBottom: "16px",
};

const textFieldSx = {
  "& .MuiInputLabel-root": {
    fontFamily: "'Space Mono', monospace",
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#282828",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#282828",
  },
  "& .MuiInputBase-input": {
    fontFamily: "'Cormorant', serif",
    fontSize: "18px",
    color: "#282828",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 0,
    "& fieldset": {
      borderColor: "#282828",
    },
    "&:hover fieldset": {
      borderColor: "#282828",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#282828",
      borderWidth: "2px",
    },
  },
};

const submitBtnSx = {
  fontFamily: "'Space Mono', monospace",
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  fontSize: "14px",
  borderRadius: 0,
  backgroundColor: "#282828",
  color: "#f5f1eb",
  border: "1px solid #282828",
  boxShadow: "none",
  padding: "10px 24px",
  "&:hover": {
    backgroundColor: "#f5f1eb",
    color: "#282828",
    boxShadow: "none",
  },
  "&.Mui-disabled": {
    backgroundColor: "#c9c2b4",
    color: "#f5f1eb",
    border: "1px solid #c9c2b4",
  },
};

const cancelBtnSx = {
  fontFamily: "'Space Mono', monospace",
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  fontSize: "14px",
  borderRadius: 0,
  color: "#282828",
  border: "1px solid transparent",
  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
};

const ReviewModal = ({ open, onClose }) => {
  const submitReview = usePublicStore((state) => state.submitReview);

  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    if (loading) return;
    setForm(initialState);
    setFeedback(null);
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.clientName.trim() || !form.comment.trim()) {
      setFeedback({ type: "error", message: "Please fill in both fields." });
      return;
    }

    setLoading(true);
    setFeedback(null);

    const result = await submitReview(form);

    setLoading(false);

    if (result.success) {
      setFeedback({
        type: "success",
        message: "Thank you! Your review has been submitted for approval.",
      });
      setForm(initialState);
      setTimeout(() => {
        handleClose();
      }, 1800);
    } else {
      setFeedback({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      slotProps={{ paper: { className: "review-modal-paper" } }}
    >
      <DialogTitle sx={titleSx}>
        <span>
          Leave a Review
          <div
            style={{
              fontFamily: "'EB Garamond', serif",
              fontStyle: "italic",
              textTransform: "lowercase",
              fontSize: "clamp(15px, 2vw, 16px)",
              color: "#282828",
              marginTop: "4px",
            }}
          >
            share your experience
          </div>
        </span>
        <IconButton
          onClick={handleClose}
          disabled={loading}
          size="small"
          sx={{ color: "#282828", alignSelf: "flex-start" }}
        >
          <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>&times;</span>
        </IconButton>
      </DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 3, pt: 3 }}
        >
          {feedback && (
            <Alert
              severity={feedback.type}
              sx={{
                fontFamily: "'Cormorant', serif",
                fontSize: "16px",
                borderRadius: 0,
              }}
            >
              {feedback.message}
            </Alert>
          )}

          <TextField
            label="Your Name"
            name="clientName"
            value={form.clientName}
            onChange={handleChange}
            fullWidth
            required
            disabled={loading}
            variant="outlined"
            sx={textFieldSx}
          />

          <TextField
            label="Your Experience"
            name="comment"
            value={form.comment}
            onChange={handleChange}
            fullWidth
            required
            multiline
            minRows={4}
            disabled={loading}
            variant="outlined"
            sx={textFieldSx}
          />
        </DialogContent>

        <DialogActions
          sx={{
            px: 3,
            pb: 3,
            pt: 1,
            borderTop: "1px solid #282828",
            justifyContent: "space-between",
          }}
        >
          <Button onClick={handleClose} disabled={loading} sx={cancelBtnSx}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading} sx={submitBtnSx}>
            {loading ? (
              <CircularProgress size={18} sx={{ color: "transparent" }} />
            ) : (
              "Submit"
            )}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ReviewModal;
