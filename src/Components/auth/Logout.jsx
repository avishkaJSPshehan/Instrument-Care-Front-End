export const doFrontendLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};