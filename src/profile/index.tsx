import { Routes, Route } from "@package/routes";

const Profile = () => {
  return (
    <Routes>
      <Route index element={<>profile</>} />
      <Route path="/:userId" element={<>profile id</>} />
      <Route path="/:userId/edit" element={<>profile edit</>} />
    </Routes>
  );
};

export default Profile;
