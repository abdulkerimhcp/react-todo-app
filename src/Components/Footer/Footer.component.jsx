import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">2 items left</span>
      <ul className="filters">
			<li>
				<span className="selected">All</span>
			</li>
			<li>
				<span>Active</span>
			</li>
			<li>
				<span>Completed</span>
			</li>
		</ul>
        <button className="clear-completed">
			Clear completed
		</button>

    </footer>
  );
}

export default Footer;
