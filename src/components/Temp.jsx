import React from "react";

import { useCustom } from "@table-library/react-table-library/table";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/chakra-ui";
import { useRowSelect } from "@table-library/react-table-library/select";
import {
  useTree,
  TreeExpandClickTypes,
} from "@table-library/react-table-library/tree";
import { useSort } from "@table-library/react-table-library/sort";
import { usePagination } from "@table-library/react-table-library/pagination";
import {
  findNodeById,
  insertNode,
} from "@table-library/react-table-library/common";
import { Box, HStack, Checkbox, IconButton, Button } from "@chakra-ui/react";
import {
  FaPen,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
} from "react-icons/fa";

// import { nodes } from "../../../data";
const nodes = [
  {
    id: 1,
    name: "Task 1",
    deadline: new Date(),
    type: "Type A",
    isComplete: false,
    nodes: [],
  },
  {
    id: 2,
    name: "Task 2",
    deadline: new Date(),
    type: "Type B",
    isComplete: true,
    nodes: [],
  },
  // Add more sample nodes as needed
];

const key = "Showreel";

const Component = () => {
  const [data, setData] = React.useState({ nodes });

  //* Theme *//

  const chakraTheme = getTheme({
    ...DEFAULT_OPTIONS,
    striped: true,
  });
  const customTheme = {
    Table: `
      --data-table-library_grid-template-columns:  64px repeat(5, minmax(0, 1fr));

      margin: 16px 0px;
    `,
  };
  const theme = useTheme([chakraTheme, customTheme]);

  //* Resize *//

  const resize = { resizerHighlight: "#dee2e6" };

  //* Pagination *//

  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 4,
    },
    onChange: onPaginationChange,
  });

  function onPaginationChange(action, state) {
    console.log(action, state);
  }

  //* Search *//

  const [search, setSearch] = React.useState("");

  useCustom("search", data, {
    state: { search },
    onChange: onSearchChange,
  });

  function onSearchChange(action, state) {
    console.log(action, state);
    pagination.fns.onSetPage(0);
  }

  //* Filter *//

  const [isHide, setHide] = React.useState(false);

  useCustom("filter", data, {
    state: { isHide },
    onChange: onFilterChange,
  });

  function onFilterChange(action, state) {
    console.log(action, state);
    pagination.fns.onSetPage(0);
  }

  //* Select *//

  const select = useRowSelect(data, {
    onChange: onSelectChange,
  });

  function onSelectChange(action, state) {
    console.log(action, state);
  }

  //* Tree *//

  const tree = useTree(
    data,
    {
      onChange: onTreeChange,
    },
    {
      clickType: TreeExpandClickTypes.ButtonClick,
      treeYLevel: 1,
      treeIcon: {
        margin: "4px",
        iconDefault: null,
        iconRight: <FaChevronRight />,
        iconDown: <FaChevronDown />,
      },
    }
  );

  function onTreeChange(action, state) {
    console.log(action, state);
  }

  //* Sort *//

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortIcon: {
        iconDefault: null,
        iconUp: <FaChevronUp />,
        iconDown: <FaChevronDown />,
      },
      sortFns: {
        TASK: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
        DEADLINE: (array) => array.sort((a, b) => a.deadline - b.deadline),
        TYPE: (array) => array.sort((a, b) => a.type.localeCompare(b.type)),
        COMPLETE: (array) => array.sort((a, b) => a.isComplete - b.isComplete),
        TASKS: (array) =>
          array.sort((a, b) => (a.nodes || []).length - (b.nodes || []).length),
      },
    }
  );

  function onSortChange(action, state) {
    console.log(action, state);
  }

  //* Drawer *//

  const [drawerId, setDrawerId] = React.useState(null);
  const [edited, setEdited] = React.useState("");

  const handleEdit = (event) => {
    setEdited(event.target.value);
  };

  const handleCancel = () => {
    setEdited("");
    setDrawerId(null);
  };

  const handleSave = () => {
    const node = findNodeById(data.nodes, drawerId);
    const editedNode = { ...node, name: edited };
    const nodes = insertNode(data.nodes, editedNode);

    setData({
      nodes,
    });

    setEdited("");
    setDrawerId(null);
  };

  //* Modal *//

  const [modalOpened, setModalOpened] = React.useState(false);

  //* Custom Modifiers *//

  let modifiedNodes = data.nodes;

  // search
  modifiedNodes = modifiedNodes.filter((node) =>
    node.name.toLowerCase().includes(search.toLowerCase())
  );

  // filter
  modifiedNodes = isHide
    ? modifiedNodes.filter((node) => !node.isComplete)
    : modifiedNodes;

  //* Columns *//

  const COLUMNS = [
    {
      label: "Task",
      renderCell: (item) => item.name,
      resize,
      sort: { sortKey: "TASK" },
      select: {
        renderHeaderCellSelect: () => (
          <Checkbox
            borderColor="black"
            isChecked={select.state.all}
            isIndeterminate={!select.state.all && !select.state.none}
            onChange={select.fns.onToggleAll}
          />
        ),
        renderCellSelect: (item) => (
          <Checkbox
            borderColor="black"
            style={{ backgroundColor: "#ffffff" }}
            isChecked={select.state.ids.includes(item.id)}
            onChange={() => select.fns.onToggleById(item.id)}
          />
        ),
      },
      tree: true,
    },
    {
      label: "Deadline",
      renderCell: (item) =>
        item.deadline.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
      resize,
      sort: { sortKey: "DEADLINE" },
    },
    {
      label: "Type",
      renderCell: (item) => item.type,
      resize,
      sort: { sortKey: "TYPE" },
    },
    {
      label: "Complete",
      renderCell: (item) => item.isComplete.toString(),
      resize,
      sort: { sortKey: "COMPLETE" },
    },
    {
      label: "Tasks",
      renderCell: (item) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{item.nodes?.length}</span>
          <IconButton
            aria-label="edit"
            icon={<FaPen />}
            size="xs"
            variant="ghost"
            colorScheme="teal"
            onClick={() => setDrawerId(item.id)}
          />
        </div>
      ),
      resize,
      sort: { sortKey: "TASKS" },
    },
  ];

  return (
    <>
      {/* Table */}

      <Box p={3} borderWidth="1px" borderRadius="lg">
        <CompactTable
          columns={COLUMNS}
          data={{ ...data, nodes: modifiedNodes }}
            // theme={theme}
          layout={{ custom: true }}
          select={select}
          tree={tree}
        //   sort={sort}
        //   pagination={pagination}
        />
      </Box>
    </>
  );
};
export default Component;
