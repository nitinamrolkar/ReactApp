function Sidebar() {
  return (
   <div className="col bg-danger-subtle">
       <div style={{
      width: "200px",
      height: "100vh",
      
      padding: "10px"
    }}>
      
      <h4>Menu</h4>

      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Settings</li>
      </ul>

    </div>
   </div>
  );
}

export default Sidebar;