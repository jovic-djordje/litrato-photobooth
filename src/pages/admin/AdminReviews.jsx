import "./admin.style.css";
import { LuPanelLeftDashed, LuTrash2, LuCheck, LuX } from "react-icons/lu";
import { useAdminStore } from "../../store/adminStore";
import { useEffect } from "react";

const AdminReviews = () => {
  const toggleSidebar = useAdminStore((state) => state.toggleSidebar);
  const fetchReviews = useAdminStore((state) => state.fetchReviews);
  const reviews = useAdminStore((state) => state.reviews) || [];
  const updateReviewStatus = useAdminStore((state) => state.updateReviewStatus);
  const deleteReview = useAdminStore((state) => state.deleteReview);

  useEffect(() => {
    if (fetchReviews) fetchReviews();
  }, [fetchReviews]);

  const totalCount = reviews.length;
  const pendingCount = reviews.filter(
    (item) => item.status === "pending",
  ).length;
  const approvedCount = reviews.filter(
    (item) => item.status === "approved",
  ).length;

  const reviewsCart = [
    { id: 1, cartName: "Total Reviews", number: totalCount },
    {
      id: 2,
      cartName: "Pending Approval",
      number: pendingCount,
      color: "#e6a700",
    },
    {
      id: 3,
      cartName: "Approved / Visible",
      number: approvedCount,
      color: "#2ecc71",
    },
  ];

  const handleApprove = (id) => {
    if (updateReviewStatus) updateReviewStatus(id, "approved");
  };

  const handleReject = (id) => {
    if (updateReviewStatus) updateReviewStatus(id, "rejected");
  };

  const getStatusLabel = (status) => {
    if (status === "approved") return "Approved";
    if (status === "rejected") return "Rejected";
    return "Pending";
  };

  const getStatusClass = (status) => {
    if (status === "approved") return "status-active";
    if (status === "rejected") return "status-inactive";
    return "status-pending";
  };

  return (
    <section className="admin-special dash">
      <div className="admin-special-holder dash-holder">
        <div className="admin-special-header dash-header">
          <div className="admin-special-header-holder admin-menu-header-holder dash-header-holder">
            <div className="admin-special-text-holder admin-menu-text-header-holder">
              <LuPanelLeftDashed
                className="admin-menu-header-icon dash-header-icon"
                onClick={toggleSidebar}
              />

              <div className="admin-special-header-text dash-header-text">
                <span>Reviews Moderation</span>
                <p>Approve or reject client testimonials</p>
              </div>
            </div>
          </div>
        </div>

        <div className="admin-special-details dash-details">
          <div className="admin-special-holder dash-details-holder">
            <div className="dash-carts-holder">
              {reviewsCart.map((cart) => (
                <div className="dash-cart" key={cart.id}>
                  <div className="dash-cart-width">
                    <div className="dash-cart-heading">
                      <p>{cart.cartName}</p>
                    </div>
                    <div className="dash-cart-info">
                      <span style={{ color: cart.color }}>{cart.number}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="admin-special-cart admin-menu-cart">
          <div className="admin-menu-cart-width">
            <div className="admin-menu-cart-head">
              <div className="admin-menu-cart-text-holder">
                <p>Client Reviews</p>
                <span>Manage customer feedback and website visibility</span>
              </div>
            </div>

            {reviews.length === 0 ? (
              <p
                style={{ padding: "20px", textAlign: "center", color: "#666" }}
              >
                No reviews found.
              </p>
            ) : (
              reviews.map((review) => {
                const reviewId = review.id;
                const clientName = review.clientname || "Anonymous";
                const statusLabel = getStatusLabel(review.status);
                const statusClass = getStatusClass(review.status);

                return (
                  <div className="special-list-cart" key={reviewId}>
                    <div className="special-list-cart-width">
                      <div className="special-list-cart-text">
                        <div className="special-list-cart-title-holder">
                          <h3>{clientName}</h3>
                          <span className={statusClass}>{statusLabel}</span>
                        </div>
                        <p>{review.comment}</p>
                      </div>

                      <div className="special-list-cart-btn-holder">
                        <div className="action-icons">
                          {review.status !== "approved" && (
                            <LuCheck
                              className="action-icon approve-review-icon"
                              title="Approve"
                              onClick={() => handleApprove(reviewId)}
                            />
                          )}
                          {review.status !== "rejected" && (
                            <LuX
                              className="action-icon reject-review-icon"
                              title="Reject"
                              onClick={() => handleReject(reviewId)}
                            />
                          )}
                          <LuTrash2
                            className="action-icon delete-special-icon"
                            title="Delete"
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Are you sure you want to delete this review?",
                                )
                              ) {
                                if (deleteReview) deleteReview(reviewId);
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminReviews;
